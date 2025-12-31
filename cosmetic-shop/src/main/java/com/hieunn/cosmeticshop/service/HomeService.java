package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;

import java.util.List;
import java.util.Map;

public interface HomeService {
    List<Category> getAllCategories();

    List<Brand> getAllBrands();

    List<Product> getFlashSaleProducts();

    List<Product> getProductsByCategory(String categorySlug);

    Map<String, List<Product>> getHomeProductSections();
}
