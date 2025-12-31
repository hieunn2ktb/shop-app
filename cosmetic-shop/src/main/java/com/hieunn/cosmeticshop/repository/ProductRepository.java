package com.hieunn.cosmeticshop.repository;

import com.hieunn.cosmeticshop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // For Flash Sale (e.g., discounted products)
    @Query("SELECT p FROM Product p WHERE p.originalPrice > p.price")
    List<Product> findDiscountedProducts();

    // Find by Category slug for specific sections (Makeup, Face Care...)
    List<Product> findByCategorySlug(String slug);

    // Find top N best sellers (mock logic using simple ordering for now)
    List<Product> findTop10ByOrderByQuantityDesc();
}
