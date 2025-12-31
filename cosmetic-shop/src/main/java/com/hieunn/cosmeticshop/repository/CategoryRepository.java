package com.hieunn.cosmeticshop.repository;

import com.hieunn.cosmeticshop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Add custom queries if needed, e.g., findByFeaturedTrue()
    // For now, findAll() is sufficient for "Featured Categories" if we limit or
    // select specific ones
}
