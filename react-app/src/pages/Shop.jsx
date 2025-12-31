import React from 'react';
import { Link } from 'react-router-dom';

// Import images (reusing existing ones for now)
import cat1 from '../assets/img/category_img_01.jpg';
import cat2 from '../assets/img/category_img_02.jpg';
import cat3 from '../assets/img/category_img_03.jpg';
import feat1 from '../assets/img/feature_prod_01.jpg';
import feat2 from '../assets/img/feature_prod_02.jpg';
import feat3 from '../assets/img/feature_prod_03.jpg';

const Shop = () => {
    // Dummy product data
    const products = [
        { name: "[Phiên bản giàu dưỡng] Bộ Kem Dưỡng Chống Lão Hóa Nhân...", brand: "SULWHASOO", price: "3.900.000đ", oldPrice: "5.400.000đ", discount: "-28%", img: cat1 },
        { name: "[XẢ DATE 2026] Bộ Dưỡng Da Dành Cho Nam Giới W...", brand: "WHOO", price: "1.190.000đ", oldPrice: "2.900.000đ", discount: "-59%", img: feat1 },
        { name: "Bộ Chống Lão Hóa Ohui Tím Ohui Age Recovery Special...", brand: "OHUI", price: "1.790.000đ", oldPrice: "3.500.000đ", discount: "-49%", img: cat3 },
        { name: "Bộ Dầu Gội và Xả Whoo Spa Shampoo & Rinse", brand: "WHOO", price: "990.000đ", oldPrice: "1.600.000đ", discount: "-38%", img: feat2 },
        { name: "Bộ Dưỡng Ẩm Ohui Miracle Moisture 2pcs Special Set...", brand: "OHUI", price: "1.250.000đ", oldPrice: "1.900.000đ", discount: "-34%", img: cat2 },
        { name: "Bộ Dưỡng Da 2 Tầng Tái Sinh Cao Cấp Whoo Cheongidan...", brand: "WHOO", price: "10.200.000đ", oldPrice: "17.000.000đ", discount: "-40%", img: feat3 },
        { name: "Bộ Dưỡng Da Chống Lão Hóa Cao Cấp 2 Tầng Whoo...", brand: "WHOO", price: "16.800.000đ", oldPrice: "20.000.000đ", discount: "-40%", img: cat1 },
        { name: "Bộ Dưỡng Da Chống Lão Hóa Cao Cấp The Whoo...", brand: "WHOO", price: "4.390.000đ", oldPrice: "7.200.000đ", discount: "-39%", img: feat1 },
    ];

    return (
        <div className="container py-5">
            <div className="row">
                {/* Sidebar Filter */}
                <div className="col-lg-3">
                    {/* Category */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center bg-light p-3 mb-2" style={{ borderRadius: '5px' }}>
                            <h6 className="m-0 fw-bold">Danh mục sản phẩm</h6>
                            <i className="fas fa-minus small"></i>
                        </div>
                        {/* Placeholder for tree items or list if needed, currently empty in screenshot but implied */}
                    </div>

                    {/* Brand Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="m-0 fw-bold">Thương hiệu</h6>
                            <i className="fas fa-minus small"></i>
                        </div>
                        <ul className="list-unstyled">
                            {['OHUI', 'Whoo', 'WHOO', 'SUM37', 'SULWHASOO', 'CAREZONE'].map((brand, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input type="checkbox" className="form-check-input me-2" id={`brand-${idx}`} style={{ borderColor: '#ddd' }} />
                                    <label htmlFor={`brand-${idx}`} className="small text-muted">{brand}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="m-0 fw-bold">Lọc Giá</h6>
                            <i className="fas fa-minus small"></i>
                        </div>
                        <ul className="list-unstyled">
                            {['Dưới 500.000đ', '500.000đ - 5.000.000đ', '5.000.000đ - 15.000.000đ', '15.000.000đ - 30.000.000đ', 'Trên 30.000.000đ'].map((price, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input type="checkbox" className="form-check-input me-2" id={`price-${idx}`} style={{ borderColor: '#ddd' }} />
                                    <label htmlFor={`price-${idx}`} className="small text-muted">{price}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Type Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="m-0 fw-bold">Loại sản phẩm</h6>
                            <i className="fas fa-minus small"></i>
                        </div>
                        <ul className="list-unstyled">
                            {['Khác', 'Sữa Rửa Mặt', 'Kem Chống Nắng', 'Son Dưỡng', 'Tinh Chất', 'Bộ Sản Phẩm', 'Trang Điểm'].map((type, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input type="checkbox" className="form-check-input me-2" id={`type-${idx}`} style={{ borderColor: '#ddd' }} />
                                    <label htmlFor={`type-${idx}`} className="small text-muted">{type}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        {products.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 border-0 shadow-sm position-relative">
                                    <div className="position-relative">
                                        {/* Discount Badge */}
                                        <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                            {item.discount}
                                        </span>
                                        {/* Icons */}
                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                <i className="fas fa-shopping-bag"></i>
                                            </button>
                                        </div>

                                        <Link to="/shop-single">
                                            <img src={item.img} className="card-img-top p-3" alt={item.name} />
                                        </Link>
                                    </div>

                                    <div className="card-body p-2 d-flex flex-column">
                                        <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                        <Link to="/shop-single" className="text-decoration-none text-dark mb-2">
                                            <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                        </Link>
                                        <div className="mt-auto">
                                            <div className="d-flex align-items-baseline">
                                                <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
