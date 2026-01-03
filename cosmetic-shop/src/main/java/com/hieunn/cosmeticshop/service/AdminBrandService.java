package com.hieunn.cosmeticshop.service;

import com.hieunn.cosmeticshop.dto.BrandDTO;
import com.hieunn.cosmeticshop.entity.Brand;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface AdminBrandService {
    List<Brand> getAllBrands();

    Brand getBrandById(Long id);

    Brand createBrand(BrandDTO brandDTO, MultipartFile logo) throws IOException;

    Brand updateBrand(Long id, BrandDTO brandDTO, MultipartFile logo) throws IOException;

    void deleteBrand(Long id);
}
