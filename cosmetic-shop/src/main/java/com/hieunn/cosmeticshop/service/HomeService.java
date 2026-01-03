package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;

import com.hieunn.cosmeticshop.dto.request.ProductFilterRequest;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface HomeService {

    Page<Product> searchProducts(ProductFilterRequest filterRequest);

    com.hieunn.cosmeticshop.dto.response.FilterMetadataResponse getFilterMetadata(ProductFilterRequest filterRequest);

    List<Category> getAllCategories();

    List<Brand> getAllBrands();

    List<Product> getFlashSaleProducts();

    List<Product> getProductsByCategory(String categorySlug);

    Map<String, List<Product>> getHomeProductSections();

    Product getProductById(Long id);
}
