package com.hieunn.cosmeticshop.controller;

import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;
import com.hieunn.cosmeticshop.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hieunn.cosmeticshop.dto.request.ProductFilterRequest;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class HomeController {

    private final HomeService homeService;

    @PostMapping("/products")
    public ResponseEntity<Page<Product>> searchProducts(@RequestBody ProductFilterRequest request) {
        return ResponseEntity.ok(homeService.searchProducts(request));
    }

    @PostMapping("/filter-options")
    public ResponseEntity<com.hieunn.cosmeticshop.dto.response.FilterMetadataResponse> getFilterMetadata(
            @RequestBody ProductFilterRequest request) {
        return ResponseEntity.ok(homeService.getFilterMetadata(request));
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(homeService.getProductById(id));
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(homeService.getAllCategories());
    }

    @GetMapping("/brands")
    public ResponseEntity<List<Brand>> getBrands() {
        return ResponseEntity.ok(homeService.getAllBrands());
    }

    @GetMapping("/flash-sale")
    public ResponseEntity<List<Product>> getFlashSale() {
        return ResponseEntity.ok(homeService.getFlashSaleProducts());
    }

    @GetMapping("/sections")
    public ResponseEntity<Map<String, List<Product>>> getProductSections() {
        return ResponseEntity.ok(homeService.getHomeProductSections());
    }
}
