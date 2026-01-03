package com.hieunn.cosmeticshop.dto;

import lombok.Data;

@Data
public class BrandDTO {
    private Long id;
    private String name;
    private String logo;
    private String description; // Optional, if Brand entity has it? Let's check Brand entity again.
}
