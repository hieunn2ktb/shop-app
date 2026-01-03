package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.dto.CheckoutRequest;
import com.hieunn.cosmeticshop.entity.*;
import com.hieunn.cosmeticshop.repository.CartRepository;
import com.hieunn.cosmeticshop.repository.OrderRepository;
import com.hieunn.cosmeticshop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartService cartService;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final com.hieunn.cosmeticshop.repository.ProductRepository productRepository;

    @Transactional
    public Order checkout(String username, CheckoutRequest request) {
        // 1. Get User and Cart
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartService.getCart(username);

        if (cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        // 2. Validate Stock and Calculate Total
        BigDecimal totalAmount = BigDecimal.ZERO;
        List<OrderItem> orderItems = new ArrayList<>();
        Order order = new Order(); // Create order object first to link items

        for (CartItem cartItem : cart.getItems()) {
            Product product = cartItem.getProduct();
            if (product.getQuantity() < cartItem.getQuantity()) {
                throw new RuntimeException("Insufficient stock for product: " + product.getName());
            }

            // Decrease stock
            product.setQuantity(product.getQuantity() - cartItem.getQuantity());
            productRepository.save(product);

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(cartItem.getQuantity());

            BigDecimal price = product.getPrice();
            orderItem.setPrice(price);

            BigDecimal lineTotal = price.multiply(BigDecimal.valueOf(cartItem.getQuantity()));
            totalAmount = totalAmount.add(lineTotal);

            orderItems.add(orderItem);
        }

        // 3. Create Order
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("PENDING");
        order.setReceiverName(request.getReceiverName());
        order.setPhoneNumber(request.getPhoneNumber());
        order.setShippingAddress(request.getShippingAddress());
        order.setPaymentMethod(request.getPaymentMethod());
        order.setOrderItems(orderItems);
        order.setTotalAmount(totalAmount);

        // 4. Save Order
        Order savedOrder = orderRepository.save(order);

        // 5. Clear Cart
        cart.getItems().clear();
        cartRepository.save(cart);

        return savedOrder;
    }
}
