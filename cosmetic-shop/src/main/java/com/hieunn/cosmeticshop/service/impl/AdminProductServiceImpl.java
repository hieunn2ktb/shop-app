package com.hieunn.cosmeticshop.service.impl;

import com.hieunn.cosmeticshop.dto.ProductDTO;
import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.entity.Category;
import com.hieunn.cosmeticshop.entity.Product;
import com.hieunn.cosmeticshop.entity.ProductImage;
import com.hieunn.cosmeticshop.repository.BrandRepository;
import com.hieunn.cosmeticshop.repository.CategoryRepository;
import com.hieunn.cosmeticshop.repository.ProductImageRepository;
import com.hieunn.cosmeticshop.repository.ProductRepository;
import com.hieunn.cosmeticshop.service.AdminProductService;
import com.hieunn.cosmeticshop.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminProductServiceImpl implements AdminProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final ProductImageRepository productImageRepository;
    private final FileStorageService fileStorageService; // Inject FileStorageService

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    @Transactional
    public Product createProduct(ProductDTO dto, List<MultipartFile> images) throws IOException { // Added exception
        Product product = new Product();
        mapDtoToEntity(dto, product);

        // Handle slug generation simply
        product.setSlug(dto.getName().toLowerCase().replace(" ", "-"));

        Product savedProduct = productRepository.save(product);

        // Handle Images
        if (images != null && !images.isEmpty()) {
            for (MultipartFile image : images) {
                if (!image.isEmpty()) {
                    String fileName = fileStorageService.storeFile(image);
                    ProductImage productImage = new ProductImage();
                    productImage.setImageUrl("http://localhost/uploads/" + fileName);
                    productImage.setProduct(savedProduct);
                    productImageRepository.save(productImage);
                }
            }
        } else if (dto.getImageUrl() != null && !dto.getImageUrl().isEmpty()) {
            // Fallback to URL if provided textually (optional)
            ProductImage productImage = new ProductImage();
            productImage.setImageUrl(dto.getImageUrl());
            productImage.setProduct(savedProduct);
            productImageRepository.save(productImage);
        }

        return savedProduct;
    }

    @Override
    @Transactional
    public Product updateProduct(Long id, ProductDTO dto, List<MultipartFile> images) throws IOException {
        Product product = getProductById(id);
        mapDtoToEntity(dto, product);

        Product savedProduct = productRepository.save(product);

        if (images != null && !images.isEmpty()) {
            for (MultipartFile image : images) {
                if (!image.isEmpty()) {
                    String fileName = fileStorageService.storeFile(image);
                    ProductImage productImage = new ProductImage();
                    productImage.setImageUrl("http://localhost/uploads/" + fileName);
                    productImage.setProduct(savedProduct);
                    productImageRepository.save(productImage);
                }
            }
        }

        return savedProduct;
    }

    @Override
    @Transactional
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    private void mapDtoToEntity(ProductDTO dto, Product product) {
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setOriginalPrice(dto.getOriginalPrice());
        product.setQuantity(dto.getQuantity());
        product.setDescription(dto.getDescription());

        if (dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            product.setCategory(category);
        }

        if (dto.getBrandId() != null) {
            Brand brand = brandRepository.findById(dto.getBrandId())
                    .orElseThrow(() -> new RuntimeException("Brand not found"));
            product.setBrand(brand);
        }
    }
}
