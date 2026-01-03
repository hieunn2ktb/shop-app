package com.hieunn.cosmeticshop.dto.request;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class ProductFilterRequest {
    private List<String> brands;
    private List<String> categories; // For "Loại sản phẩm" (Product Types) or "Danh mục"
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private int page = 0;
    private int size = 12;
    private String sort = "id,desc";
}
