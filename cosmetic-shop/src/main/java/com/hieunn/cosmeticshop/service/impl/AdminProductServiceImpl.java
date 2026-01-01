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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminProductServiceImpl implements AdminProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final ProductImageRepository productImageRepository; // We need to add this Repo

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
    public Product createProduct(ProductDTO dto) {
        Product product = new Product();
        mapDtoToEntity(dto, product);

        // Handle slug generation simply
        product.setSlug(dto.getName().toLowerCase().replace(" ", "-"));

        Product savedProduct = productRepository.save(product);

        // Handle Image
        if (dto.getImageUrl() != null && !dto.getImageUrl().isEmpty()) {
            ProductImage image = new ProductImage();
            image.setImageUrl(dto.getImageUrl());
            image.setProduct(savedProduct);
            // Save image via cascading or separate repo if needed.
            // Since CascadeType.ALL is on Product.images, we could add to list,
            // but setting the ManyToOne relationship and saving via repo is safer for now
            // if not initializing list
            productImageRepository.save(image);
        }

        return savedProduct;
    }

    @Override
    @Transactional
    public Product updateProduct(Long id, ProductDTO dto) {
        Product product = getProductById(id);
        mapDtoToEntity(dto, product);
        return productRepository.save(product);
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
