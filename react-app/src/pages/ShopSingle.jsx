import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import placeholder images
import activeImage from '../assets/img/shop_01.jpg'; // Reusing as placeholder
import thumb1 from '../assets/img/shop_01.jpg';
import thumb2 from '../assets/img/shop_02.jpg';
import thumb3 from '../assets/img/shop_03.jpg';

const ShopSingle = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(activeImage);

    const handleQuantityChange = (val) => {
        if (quantity + val >= 1) {
            setQuantity(quantity + val);
        }
    };

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    {/* Left Column: Image Carousel */}
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3 border-0">
                            <img className="card-img img-fluid" src={selectedImage} alt="Product Image" id="product-detail" style={{ objectFit: 'cover', height: '500px' }} />
                        </div>
                        <div className="row">
                            <div className="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                    <i className="text-dark fas fa-chevron-left"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </div>
                            <div className="col-10" id="multi-item-example">
                                <div className="d-flex justify-content-center gap-2">
                                    <div style={{ cursor: 'pointer' }} onClick={() => setSelectedImage(thumb1)}>
                                        <img className="img-fluid border" src={thumb1} alt="Product Image 1" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ cursor: 'pointer' }} onClick={() => setSelectedImage(thumb2)}>
                                        <img className="img-fluid border" src={thumb2} alt="Product Image 2" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ cursor: 'pointer' }} onClick={() => setSelectedImage(thumb3)}>
                                        <img className="img-fluid border" src={thumb3} alt="Product Image 3" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="next">
                                    <i className="text-dark fas fa-chevron-right"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="col-lg-7 mt-5">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body">
                                <small className="text-uppercase text-muted">SULWHASOO</small>
                                <h2 className="h2 fw-bold">[Mẫu Mới] Kem Dưỡng Da Sulwhasoo The Ultimate S Chống Lão Hóa Trẻ Hóa Làn Da Nâng Cơ Chống Nhăn</h2>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <span className="h3 fw-bold text-danger me-3">8,500,000đ</span>
                                        <span className="text-muted text-decoration-line-through">11,500,000đ</span>
                                    </div>
                                    <button className="btn btn-outline-secondary border-0 bg-transparent">
                                        <i className="far fa-heart fa-lg"></i>
                                    </button>
                                </div>

                                <div className="mb-4">
                                    <h6 className="fw-bold">Dung tích:</h6>
                                    <button className="btn btn-outline-danger btn-sm active">60ml</button>
                                </div>

                                <div className="mb-4 d-flex align-items-center">
                                    <div className="input-group" style={{ maxWidth: '120px' }}>
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(-1)}>-</button>
                                        <input type="text" className="form-control text-center bg-white" value={quantity} readOnly />
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(1)}>+</button>
                                    </div>
                                </div>

                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-lg text-white" style={{ backgroundColor: '#ff9999', borderColor: '#ff9999' }}>THÊM VÀO GIỎ</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-lg bg-white text-danger fw-bold" style={{ borderColor: '#ff9999' }}>MUA NGAY</button>
                                    </div>
                                </div>

                                {/* Policies */}
                                <div className="row mt-4 small text-muted">
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-check-circle text-success mt-1"></i>
                                        <div>Cam kết hàng chính hãng.<br />Đền bù 100% nếu phát hiện hàng giả</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-truck text-success mt-1"></i>
                                        <div>Giao Hàng Miễn Phí Toàn Quốc<br />Áp dụng đơn hàng từ trên 400k</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-sync-alt text-success mt-1"></i>
                                        <div>Đổi trả do lỗi người bán<br />trong vòng 14 ngày</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-shipping-fast text-success mt-1"></i>
                                        <div>Giao hàng ngay<br />Nội thành TPHCM</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Tabs & Related Products */}
                <div className="row mt-5">
                    {/* Tabs Section */}
                    <div className="col-lg-8">
                        <ul className="nav nav-tabs border-bottom-0 mb-3" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active fw-bold text-uppercase border-0 border-bottom border-dark text-dark rounded-0 px-0 me-4" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ borderBottomWidth: '2px !important' }}>MÔ TẢ SẢN PHẨM</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link fw-bold text-uppercase border-0 text-muted rounded-0 px-0 me-4" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">THÀNH PHẦN</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link fw-bold text-uppercase border-0 text-muted rounded-0 px-0 me-4" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">CÔNG DỤNG</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link fw-bold text-uppercase border-0 text-muted rounded-0 px-0 me-4" id="manual-tab" data-bs-toggle="tab" data-bs-target="#manual" type="button" role="tab" aria-controls="manual" aria-selected="false">HƯỚNG DẪN SỬ DỤNG</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p className="mb-2 text-dark fw-bold">[Mẫu Mới] Kem Dưỡng Da Sulwhasoo The Ultimate Chống Lão Hóa Trẻ Hóa Làn Da Nâng Cơ Chống Nhăn</p>
                                <p className="text-muted small">
                                    - Kem Dưỡng Ngừa Lão Hóa Cao Cấp Sulwhasoo The Ultimate S Cream Sau 8 tuần sử dụng, tái tạo góc chuẩn vàng 7° với hiệu quả nâng cơ độc quyền
                                </p>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p className="text-muted small">Thông tin thành phần đang cập nhật...</p>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <p className="text-muted small">Thông tin công dụng đang cập nhật...</p>
                            </div>
                            <div className="tab-pane fade" id="manual" role="tabpanel" aria-labelledby="manual-tab">
                                <p className="text-muted small">Thông tin hướng dẫn sử dụng đang cập nhật...</p>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <button className="btn btn-light border rounded-pill px-4 py-2 fw-bold text-muted small">Xem thêm nội dung +</button>
                        </div>

                        {/* Product Reviews */}
                        <div className="mt-5">
                            <h5 className="text-uppercase fw-bold border-bottom pb-2 mb-3" style={{ fontSize: '1rem' }}>ĐÁNH GIÁ SẢN PHẨM</h5>
                            <div className="p-4 text-center border rounded bg-white">
                                <p className="text-muted mb-0">Chưa có đánh giá nào.</p>
                            </div>
                        </div>

                        {/* Frequently Bought Together (Moved here) */}
                        <div className="mt-5">
                            <div className="text-center mb-4">
                                <h4 className="h4 fw-bold text-uppercase">THƯỜNG ĐƯỢC MUA CÙNG</h4>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>

                            <div className="row row-cols-2 row-cols-md-4 g-3">
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <span className="position-absolute top-0 start-0 badge m-1 rounded-0 small" style={{ backgroundColor: '#ff6600', fontSize: '0.6rem' }}>-55%</span>
                                            <div className="position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="far fa-heart" style={{ fontSize: '0.7rem' }}></i></button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="fas fa-shopping-bag" style={{ fontSize: '0.7rem' }}></i></button>
                                            </div>
                                            <img src={thumb1} className="card-img-top p-2" alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>WHOO</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.8rem' }}>Gói Kem Dưỡng Hồng Nhuận...</h6>
                                            <div>
                                                <span className="fw-bold text-danger me-1 small">450k</span>
                                                <small className="text-muted text-decoration-line-through small" style={{ fontSize: '0.65rem' }}>1000k</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <span className="position-absolute top-0 start-0 badge m-1 rounded-0 small" style={{ backgroundColor: '#ff6600', fontSize: '0.6rem' }}>-36%</span>
                                            <div className="position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="far fa-heart" style={{ fontSize: '0.7rem' }}></i></button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="fas fa-shopping-bag" style={{ fontSize: '0.7rem' }}></i></button>
                                            </div>
                                            <img src={thumb2} className="card-img-top p-2" alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>WHOO</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.8rem' }}>Kem Dưỡng Phục Hồi...</h6>
                                            <div>
                                                <span className="fw-bold text-danger me-1 small">2.990k</span>
                                                <small className="text-muted text-decoration-line-through small" style={{ fontSize: '0.65rem' }}>4.700k</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <span className="position-absolute top-0 start-0 badge m-1 rounded-0 small" style={{ backgroundColor: '#ff6600', fontSize: '0.6rem' }}>-74%</span>
                                            <div className="position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="far fa-heart" style={{ fontSize: '0.7rem' }}></i></button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="fas fa-shopping-bag" style={{ fontSize: '0.7rem' }}></i></button>
                                            </div>
                                            <img src={thumb3} className="card-img-top p-2" alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>OHUI</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.8rem' }}>Gói Kem Dưỡng Trắng...</h6>
                                            <div>
                                                <span className="fw-bold text-danger me-1 small">390k</span>
                                                <small className="text-muted text-decoration-line-through small" style={{ fontSize: '0.65rem' }}>1.500k</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <span className="position-absolute top-0 start-0 badge m-1 rounded-0 small" style={{ backgroundColor: '#ff6600', fontSize: '0.6rem' }}>-51%</span>
                                            <div className="position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="far fa-heart" style={{ fontSize: '0.7rem' }}></i></button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="fas fa-shopping-bag" style={{ fontSize: '0.7rem' }}></i></button>
                                            </div>
                                            <img src={activeImage} className="card-img-top p-2" alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>OHUI</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.8rem' }}>Kem Dưỡng Trắng Da...</h6>
                                            <div>
                                                <span className="fw-bold text-danger me-1 small">1.100k</span>
                                                <small className="text-muted text-decoration-line-through small" style={{ fontSize: '0.65rem' }}>2.250k</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Viewed Products (New Section) */}
                        <div className="mt-5">
                            <div className="text-center mb-4">
                                <h4 className="h4 fw-bold text-uppercase">SẢN PHẨM ĐÃ XEM</h4>
                                <div className="d-flex justify-content-center">
                                    <span style={{ fontSize: '20px', letterSpacing: '2px', color: '#666' }}>///</span>
                                </div>
                            </div>

                            <div className="row row-cols-2 row-cols-md-4 g-3">
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <span className="position-absolute top-0 start-0 badge m-1 rounded-0 small" style={{ backgroundColor: '#ff6600', fontSize: '0.6rem' }}>-26%</span>
                                            <div className="position-absolute top-0 end-0 m-1 d-flex flex-column gap-1">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="far fa-heart" style={{ fontSize: '0.7rem' }}></i></button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}><i className="fas fa-shopping-bag" style={{ fontSize: '0.7rem' }}></i></button>
                                            </div>
                                            <img src={activeImage} className="card-img-top p-2" alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>SULWHASOO</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.8rem' }}>[Mẫu Mới] Kem Dưỡng Da...</h6>
                                            <div>
                                                <span className="fw-bold text-danger me-1 small">8,500,000đ</span>
                                                <small className="text-muted text-decoration-line-through small" style={{ fontSize: '0.65rem' }}>11,500,000đ</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products Sidebar - Sticky Wrapper */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>

                            {/* Same Brand Products Card */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body">
                                    <h5 className="text-uppercase fw-bold border-bottom pb-2 mb-3" style={{ fontSize: '1rem' }}>SẢN PHẨM CÙNG THƯƠNG HIỆU</h5>
                                    <div className="d-flex flex-column gap-3">
                                        {/* Product Item 1 */}
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb1} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Tái Tạo Phục Hồi Da Tầng Sâu Chứa Nhân...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">2,200,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>2,900,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Item 2 */}
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb2} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Phục Hồi Da Cao Cấp Sulwhasoo Herblinic...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">650,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>1,100,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Item 3 */}
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb3} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Nhân Sâm Cải Thiện Nếp Nhăn Săn Chắc...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">650,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Item 4 */}
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={activeImage} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Kích Hoạt Dưỡng Da Đầu Tiên, Kích Hoạt Da...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">2,300,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>2,900,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Item 5 */}
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb2} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Kích Hoạt Dưỡng Da Đầu Tiên, Kích Hoạt Da...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">250,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>700,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Same Group Products Card */}
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h5 className="text-uppercase fw-bold border-bottom pb-2 mb-3" style={{ fontSize: '1rem' }}>SẢN PHẨM CÙNG NHÓM</h5>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb3} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Bộ Tinh Chất Trẻ Hóa The Whoo Bichup Advent...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">1,250,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>1,900,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb1} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Tinh Chất Cân Bằng Hệ Vi Sinh OHUI The First Genitu...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">2,590,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>4,200,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={thumb2} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Nước Thần Cấp Ẩm Su:m37 Secret Essence Advanced...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">950,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>1,400,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={activeImage} alt="Product" style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                                            <div>
                                                <h6 className="mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Bộ Dưỡng Trắng Da The Whoo Gongjinhyang...</h6>
                                                <div>
                                                    <span className="text-danger fw-bold small me-2">490,000đ</span>
                                                    <span className="text-muted small text-decoration-line-through" style={{ fontSize: '0.75rem' }}>1,500,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>


        </section >
    );
}

export default ShopSingle;
