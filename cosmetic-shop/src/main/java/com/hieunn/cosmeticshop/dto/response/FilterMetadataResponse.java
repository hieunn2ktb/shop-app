package com.hieunn.cosmeticshop.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilterMetadataResponse {
    private List<String> brands;
    private List<String> categories;
}
