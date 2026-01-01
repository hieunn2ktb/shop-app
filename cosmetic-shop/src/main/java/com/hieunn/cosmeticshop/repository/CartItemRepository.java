package com.hieunn.cosmeticshop.repository;

import com.hieunn.cosmeticshop.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
