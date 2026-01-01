package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.dto.ProductDTO;
import com.hieunn.cosmeticshop.entity.Product;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface AdminProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product createProduct(ProductDTO productDTO, MultipartFile image) throws IOException;

    Product updateProduct(Long id, ProductDTO productDTO, MultipartFile image) throws IOException;

    void deleteProduct(Long id);
}
