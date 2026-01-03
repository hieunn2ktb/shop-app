package com.hieunn.cosmeticshop.service.impl;

import com.hieunn.cosmeticshop.dto.BrandDTO;
import com.hieunn.cosmeticshop.entity.Brand;
import com.hieunn.cosmeticshop.repository.BrandRepository;
import com.hieunn.cosmeticshop.service.AdminBrandService;
import com.hieunn.cosmeticshop.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminBrandServiceImpl implements AdminBrandService {

    private final BrandRepository brandRepository;
    private final FileStorageService fileStorageService;

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    @Override
    public Brand getBrandById(Long id) {
        return brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));
    }

    @Override
    @Transactional
    public Brand createBrand(BrandDTO dto, MultipartFile logo) throws IOException {
        Brand brand = new Brand();
        brand.setName(dto.getName());

        if (logo != null && !logo.isEmpty()) {
            String fileName = fileStorageService.storeFile(logo);
            brand.setLogo("http://localhost/uploads/" + fileName);
        } else if (dto.getLogo() != null && !dto.getLogo().isEmpty()) {
            brand.setLogo(dto.getLogo());
        }

        return brandRepository.save(brand);
    }

    @Override
    @Transactional
    public Brand updateBrand(Long id, BrandDTO dto, MultipartFile logo) throws IOException {
        Brand brand = getBrandById(id);
        brand.setName(dto.getName());

        if (logo != null && !logo.isEmpty()) {
            String fileName = fileStorageService.storeFile(logo);
            brand.setLogo("http://localhost/uploads/" + fileName);
        }

        return brandRepository.save(brand);
    }

    @Override
    @Transactional
    public void deleteBrand(Long id) {
        brandRepository.deleteById(id);
    }
}
