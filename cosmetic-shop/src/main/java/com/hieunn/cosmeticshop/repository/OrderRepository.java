package com.hieunn.cosmeticshop.repository;

import com.hieunn.cosmeticshop.entity.Order;
import com.hieunn.cosmeticshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserOrderByOrderDateDesc(User user);
}
