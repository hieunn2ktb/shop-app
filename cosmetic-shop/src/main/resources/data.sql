-- Categories
INSERT INTO categories (id, name, description, slug) VALUES (1, 'Son Môi', 'Các loại son môi cao cấp', 'son-moi');
INSERT INTO categories (id, name, description, slug) VALUES (2, 'Tẩy Da Chết', 'Sản phẩm tẩy da chết hiệu quả', 'tay-da-chet');
INSERT INTO categories (id, name, description, slug) VALUES (3, 'Tẩy Trang', 'Nước và dầu tẩy trang', 'tay-trang');
INSERT INTO categories (id, name, description, slug) VALUES (4, 'Mặt Nạ', 'Mặt nạ dưỡng da các loại', 'mat-na');
INSERT INTO categories (id, name, description, slug) VALUES (5, 'Kem Dưỡng', 'Kem dưỡng da ban ngày và đêm', 'kem-duong');

-- Brands
INSERT INTO brands (id, name) VALUES (1, 'WHOO');
INSERT INTO brands (id, name) VALUES (2, 'OHUI');
INSERT INTO brands (id, name) VALUES (3, 'SUM37');
INSERT INTO brands (id, name) VALUES (4, 'SULWHASOO');

-- Products
INSERT INTO products (name, description, price, original_price, quantity, slug, brand_id, category_id) 
VALUES ('Son Lì Whoo Velvet Lip Rouge', 'Son lì mềm mịn như nhung', 800000, 1200000, 100, 'son-li-whoo-velvet', 1, 1);

INSERT INTO products (name, description, price, original_price, quantity, slug, brand_id, category_id) 
VALUES ('Kem Dưỡng Trắng Ohui Extreme White Cream', 'Kem dưỡng trắng da mờ thâm nám', 1200000, 1500000, 50, 'kem-duong-trang-ohui', 2, 5);

INSERT INTO products (name, description, price, original_price, quantity, slug, brand_id, category_id) 
VALUES ('Nước Thần Sum37 Secret Essence', 'Tinh chất giúp tái tạo làn da', 1500000, 2000000, 30, 'nuoc-than-sum37', 3, 5);

INSERT INTO products (name, description, price, original_price, quantity, slug, brand_id, category_id) 
VALUES ('Mặt Nạ Dưỡng Ẩm Sulwhasoo', 'Mặt nạ ngủ cung cấp độ ẩm', 900000, 1100000, 60, 'mat-na-sulwhasoo', 4, 4);

-- Product Images
INSERT INTO product_images (image_url, product_id) VALUES ('feature_prod_01.jpg', 1);
INSERT INTO product_images (image_url, product_id) VALUES ('feature_prod_02.jpg', 2);
INSERT INTO product_images (image_url, product_id) VALUES ('feature_prod_03.jpg', 3);
INSERT INTO product_images (image_url, product_id) VALUES ('category_img_01.jpg', 4);
