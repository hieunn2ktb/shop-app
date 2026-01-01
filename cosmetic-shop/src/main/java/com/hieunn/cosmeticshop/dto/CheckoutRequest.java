package com.hieunn.cosmeticshop.dto;

import lombok.Data;

@Data
public class CheckoutRequest {
    private String receiverName;
    private String phoneNumber;
    private String shippingAddress;
    private String note;
    private String paymentMethod; // COD, BANKING
}
