package com.hieunn.cosmeticshop.controller;

import com.hieunn.cosmeticshop.dto.BrandDTO;
import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.service.AdminBrandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin/brands")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AdminBrandController {

    private final AdminBrandService adminBrandService;

    @GetMapping
    public ResponseEntity<List<Brand>> getAllBrands() {
        return ResponseEntity.ok(adminBrandService.getAllBrands());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Brand> getBrandById(@PathVariable Long id) {
        return ResponseEntity.ok(adminBrandService.getBrandById(id));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Brand> createBrand(
            @ModelAttribute BrandDTO brandDTO,
            @RequestParam(value = "file", required = false) MultipartFile logo) throws IOException { // Changed to
                                                                                                     // "file"
        return ResponseEntity.ok(adminBrandService.createBrand(brandDTO, logo));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Brand> updateBrand(
            @PathVariable Long id,
            @ModelAttribute BrandDTO brandDTO,
            @RequestParam(value = "file", required = false) MultipartFile logo) throws IOException { // Changed to
                                                                                                     // "file"
        return ResponseEntity.ok(adminBrandService.updateBrand(id, brandDTO, logo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBrand(@PathVariable Long id) {
        adminBrandService.deleteBrand(id);
        return ResponseEntity.ok().build();
    }
}
