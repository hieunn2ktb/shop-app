package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.dto.ProductDTO;
import com.hieunn.cosmeticshop.entity.Product;
import java.util.List;

public interface AdminProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product createProduct(ProductDTO productDTO);

    Product updateProduct(Long id, ProductDTO productDTO);

    void deleteProduct(Long id);
}
