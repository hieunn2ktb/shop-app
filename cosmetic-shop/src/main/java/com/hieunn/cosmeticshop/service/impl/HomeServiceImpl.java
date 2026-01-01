package com.hieunn.cosmeticshop.service.impl;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;
import com.hieunn.cosmeticshop.repository.BrandRepository;
import com.hieunn.cosmeticshop.repository.CategoryRepository;
import com.hieunn.cosmeticshop.repository.ProductRepository;
import com.hieunn.cosmeticshop.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {

    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final ProductRepository productRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    @Override
    public List<Product> getFlashSaleProducts() {
        return productRepository.findDiscountedProducts();
    }

    @Override
    public List<Product> getProductsByCategory(String categorySlug) {
        return productRepository.findByCategorySlug(categorySlug);
    }

    @Override
    public Map<String, List<Product>> getHomeProductSections() {
        Map<String, List<Product>> sections = new HashMap<>();
        sections.put("makeup", productRepository.findByCategorySlug("trang-diem"));
        sections.put("faceCare", productRepository.findByCategorySlug("cham-soc-da-mat"));
        sections.put("sets", productRepository.findByCategorySlug("bo-san-pham"));
        sections.put("sunCare", productRepository.findByCategorySlug("cham-soc-co-the"));
        sections.put("cleansing", productRepository.findByCategorySlug("lam-sach-da"));
        return sections;
    }
}
