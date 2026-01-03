package com.hieunn.cosmeticshop.service.impl;

import com.hieunn.cosmeticshop.service.FileStorageService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService {

    private final Path fileStorageLocation;

    public FileStorageServiceImpl(
            @org.springframework.beans.factory.annotation.Value("${file.upload-dir}") String uploadDir) {
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    // public FileStorageServiceImpl() removed because we use PostConstruct now or
    // we can use Constructor Injection

    @Override
    public String storeFile(MultipartFile file) throws IOException {
        // Normalize file name
        String fileName = org.springframework.util.StringUtils.cleanPath(file.getOriginalFilename());

        // Generate unique name
        String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;

        // Copy file to the target location (Replacing existing file with the same name)
        Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }
}
