import React from 'react';
import { Link } from 'react-router-dom';
import activeImage from '../assets/img/feature_prod_01.jpg'; // Placeholder

const Wishlist = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <div className="list-group shadow-sm rounded border-0 mb-4">
                            <Link to="/account" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-user-circle me-2"></i> Thông tin cá nhân
                            </Link>
                            <Link to="/account/orders" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-box-open me-2"></i> Đơn hàng của bạn
                            </Link>
                            <Link to="/account/wishlist" className="list-group-item list-group-item-action active border-0 py-3 fw-bold" style={{ backgroundColor: '#ff8888', borderColor: '#ff8888' }}>
                                <i className="fas fa-heart me-2"></i> Sản phẩm yêu thích
                            </Link>
                            <Link to="/account" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-map-marker-alt me-2"></i> Địa chỉ giao hàng
                            </Link>
                            <Link to="/login" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-sign-out-alt me-2"></i> Đăng xuất
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9">
                        <div className="bg-white rounded shadow-sm p-4">
                            <h4 className="fw-bold mb-4">Sản phẩm yêu thích</h4>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {/* Product 1 */}
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <img src={activeImage} className="card-img-top p-2" alt="..." />
                                            <span className="position-absolute top-0 end-0 m-2 badge bg-danger rounded-pill"><i className="fas fa-times"></i></span>
                                        </div>
                                        <div className="card-body p-3">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>SULWHASOO</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.9rem' }}>Kem Dưỡng Da...</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-danger small">8,500,000đ</span>
                                                <button className="btn btn-sm btn-outline-danger rounded-circle"><i className="fas fa-cart-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product 2 */}
                                <div className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            <img src={activeImage} className="card-img-top p-2" alt="..." />
                                            <span className="position-absolute top-0 end-0 m-2 badge bg-danger rounded-pill"><i className="fas fa-times"></i></span>
                                        </div>
                                        <div className="card-body p-3">
                                            <small className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.65rem' }}>OHUI</small>
                                            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.9rem' }}>Set Dưỡng Ẩm...</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-danger small">2,500,000đ</span>
                                                <button className="btn btn-sm btn-outline-danger rounded-circle"><i className="fas fa-cart-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wishlist;
