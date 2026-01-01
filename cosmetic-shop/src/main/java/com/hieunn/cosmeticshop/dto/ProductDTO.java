package com.hieunn.cosmeticshop.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class ProductDTO {
    private String name;
    private BigDecimal price;
    private BigDecimal originalPrice;
    private Integer quantity;
    private String description;
    private String imageUrl;
    private Long categoryId;
    private Long brandId;
}
