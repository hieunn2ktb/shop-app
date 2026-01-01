package com.hieunn.cosmeticshop.repository;

import com.hieunn.cosmeticshop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.originalPrice > p.price")
    List<Product> findDiscountedProducts();

    List<Product> findByCategorySlug(String slug);

    List<Product> findTop10ByOrderByQuantityDesc();
}
