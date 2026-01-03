package com.hieunn.cosmeticshop.controller;

import com.hieunn.cosmeticshop.dto.ProductDTO;
import com.hieunn.cosmeticshop.entity.Product;
import com.hieunn.cosmeticshop.service.AdminProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Allow React Frontend to access
public class AdminProductController {

    private final AdminProductService adminProductService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(adminProductService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(adminProductService.getProductById(id));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Product> createProduct(
            @ModelAttribute ProductDTO productDTO,
            @RequestParam(value = "images", required = false) List<MultipartFile> images) throws IOException { // Changed
                                                                                                               // to
                                                                                                               // images
        return ResponseEntity.ok(adminProductService.createProduct(productDTO, images));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @ModelAttribute ProductDTO productDTO,
            @RequestParam(value = "images", required = false) List<MultipartFile> images) throws IOException { // Changed
                                                                                                               // to
                                                                                                               // images
        return ResponseEntity.ok(adminProductService.updateProduct(id, productDTO, images));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        adminProductService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
