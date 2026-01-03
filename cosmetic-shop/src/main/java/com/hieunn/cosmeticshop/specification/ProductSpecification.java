package com.hieunn.cosmeticshop.specification;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.CollectionUtils;

import jakarta.persistence.criteria.Join;
import java.math.BigDecimal;
import java.util.List;

public class ProductSpecification {

    public static Specification<Product> filterBy(List<String> brands, List<String> categories, BigDecimal minPrice,
            BigDecimal maxPrice) {
        return (root, query, criteriaBuilder) -> {
            Specification<Product> spec = Specification.where(null);

            if (!CollectionUtils.isEmpty(brands)) {
                spec = spec.and((r, q, cb) -> {
                    Join<Product, Brand> brandJoin = r.join("brand");
                    return brandJoin.get("name").in(brands);
                });
            }

            if (!CollectionUtils.isEmpty(categories)) {
                spec = spec.and((r, q, cb) -> {
                    Join<Product, Category> categoryJoin = r.join("category");
                    // Assuming we filter by category name or slug. Using name based on Frontend
                    // checkbox values.
                    // Frontend sends 'Sữa Rửa Mặt', 'Kem Chống Nắng', etc.
                    return categoryJoin.get("name").in(categories);
                });
            }

            if (minPrice != null) {
                spec = spec.and((r, q, cb) -> cb.greaterThanOrEqualTo(r.get("price"), minPrice));
            }

            if (maxPrice != null) {
                spec = spec.and((r, q, cb) -> cb.lessThanOrEqualTo(r.get("price"), maxPrice));
            }

            return spec.toPredicate(root, query, criteriaBuilder);
        };
    }
}
