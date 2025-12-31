import React from 'react';
import { Link } from 'react-router-dom';
import activeImage from '../assets/img/feature_prod_01.jpg'; // Using existing asset for placeholder

const Cart = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Left Column: Cart Items */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                                    <h5 className="fw-bold text-uppercase mb-0">Giỏ hàng:</h5>
                                    <span className="text-muted small text-decoration-underline">0 Sản phẩm</span>
                                </div>

                                {/* Free Ship Notice */}
                                <div className="alert alert-danger border-0 d-flex align-items-center" role="alert" style={{ backgroundColor: '#ffe6e6', color: '#cc0000' }}>
                                    <i className="fas fa-truck me-2"></i>
                                    <div>Mua từ <span className="fw-bold">399k</span> để được <span className="fw-bold">FREESHIP</span></div>
                                </div>

                                {/* Empty Cart State */}
                                <div className="text-center py-5">
                                    <p className="text-muted mb-3">Giỏ hàng của bạn đang trống. Mời bạn mua thêm sản phẩm <Link to="/shop" className="text-danger text-decoration-none fw-bold">tại đây</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Info */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h5 className="fw-bold text-uppercase border-bottom pb-3 mb-3">Thông tin đơn hàng</h5>
                                <div className="d-flex justify-content-between mb-4">
                                    <span className="fw-bold">Tổng tiền:</span>
                                    <span className="fw-bold text-danger fs-5">0đ</span>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exportBill" />
                                    <label className="form-check-label text-muted small" htmlFor="exportBill">Xuất hoá đơn</label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="orderNote" className="form-label fw-bold small">Ghi chú đơn hàng</label>
                                    <textarea className="form-control" id="orderNote" rows="3" placeholder="Ghi chú"></textarea>
                                </div>

                                <div className="mb-4">
                                    <input type="text" className="form-control" placeholder="Nhập mã khuyến mãi (nếu có)" />
                                </div>

                                <button className="btn btn-danger w-100 text-uppercase fw-bold py-2 mb-3" style={{ backgroundColor: '#ff8888', borderColor: '#ff8888' }}>Thanh toán ngay</button>

                                <div className="text-center">
                                    <Link to="/shop" className="text-dark small text-decoration-none"><i className="fas fa-reply me-1"></i> Tiếp tục mua hàng</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className="mt-5">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-3">
                            <h5 className="fw-bold text-uppercase mb-0">ĐỀ XUẤT DÀNH CHO BẠN</h5>
                        </div>
                    </div>
                </div>

                {/* Viewed Products */}
                <div className="mt-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h4 className="fw-bold text-uppercase mb-4">SẢN PHẨM ĐÃ XEM</h4>
                            <div className="row row-cols-2 row-cols-md-5 g-3">
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
                </div>

            </div>
        </section>
    );
};

export default Cart;
