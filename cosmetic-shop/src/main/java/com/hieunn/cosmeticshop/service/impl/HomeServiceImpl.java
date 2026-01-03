package com.hieunn.cosmeticshop.service.impl;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;
import com.hieunn.cosmeticshop.repository.BrandRepository;
import com.hieunn.cosmeticshop.repository.CategoryRepository;
import com.hieunn.cosmeticshop.repository.ProductRepository;
import com.hieunn.cosmeticshop.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.hieunn.cosmeticshop.dto.request.ProductFilterRequest;
import com.hieunn.cosmeticshop.specification.ProductSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import com.hieunn.cosmeticshop.dto.response.FilterMetadataResponse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {

    @PersistenceContext
    private EntityManager entityManager;

    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final ProductRepository productRepository;

    @Override
    public FilterMetadataResponse getFilterMetadata(ProductFilterRequest request) {
        // 1. Get available Brands (Filter by everything EXCEPT brands)
        Specification<Product> brandSpec = ProductSpecification.filterBy(
                null, // Ignore brands
                request.getCategories(),
                request.getMinPrice(),
                request.getMaxPrice());
        List<String> validBrands = getDistinctField(brandSpec, "brand", "name");

        // 2. Get available Categories (Filter by everything EXCEPT categories)
        Specification<Product> categorySpec = ProductSpecification.filterBy(
                request.getBrands(),
                null, // Ignore categories
                request.getMinPrice(),
                request.getMaxPrice());
        List<String> validCategories = getDistinctField(categorySpec, "category", "name");

        return new FilterMetadataResponse(validBrands, validCategories);
    }

    private List<String> getDistinctField(Specification<Product> spec, String joinEntity, String fieldName) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<String> query = cb.createQuery(String.class);
        Root<Product> root = query.from(Product.class);

        Join<Object, Object> join = root.join(joinEntity);
        query.select(join.get(fieldName)).distinct(true);

        if (spec != null) {
            Predicate predicate = spec.toPredicate(root, query, cb);
            if (predicate != null) {
                query.where(predicate);
            }
        }
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Page<Product> searchProducts(ProductFilterRequest request) {
        Specification<Product> spec = ProductSpecification.filterBy(
                request.getBrands(),
                request.getCategories(),
                request.getMinPrice(),
                request.getMaxPrice());

        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        if (request.getSort() != null && !request.getSort().isEmpty()) {
            String[] sortParams = request.getSort().split(",");
            if (sortParams.length == 2) {
                sort = Sort.by(Sort.Direction.fromString(sortParams[1]), sortParams[0]);
            }
        }

        Pageable pageable = PageRequest.of(request.getPage(), request.getSize(), sort);
        return productRepository.findAll(spec, pageable);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    @Override
    public List<Product> getFlashSaleProducts() {
        return productRepository.findDiscountedProducts();
    }

    @Override
    public List<Product> getProductsByCategory(String categorySlug) {
        return productRepository.findByCategorySlug(categorySlug);
    }

    @Override
    public Map<String, List<Product>> getHomeProductSections() {
        Map<String, List<Product>> sections = new HashMap<>();
        sections.put("makeup", productRepository.findByCategorySlug("trang-diem"));
        sections.put("faceCare", productRepository.findByCategorySlug("cham-soc-da-mat"));
        sections.put("sets", productRepository.findByCategorySlug("bo-san-pham"));
        sections.put("sunCare", productRepository.findByCategorySlug("chong-nang"));
        sections.put("cleansing", productRepository.findByCategorySlug("lam-sach-da"));
        sections.put("trial", productRepository.findByCategorySlug("dung-thu"));
        return sections;
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }
}
