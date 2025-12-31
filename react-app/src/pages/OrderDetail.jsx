import React from 'react';
import { Link, useParams } from 'react-router-dom';
import activeImage from '../assets/img/feature_prod_01.jpg'; // Placeholder

const OrderDetail = () => {
    const { id } = useParams();

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
                            <Link to="/account/orders" className="list-group-item list-group-item-action active border-0 py-3 fw-bold" style={{ backgroundColor: '#ff8888', borderColor: '#ff8888' }}>
                                <i className="fas fa-box-open me-2"></i> Đơn hàng của bạn
                            </Link>
                            <Link to="/account/wishlist" className="list-group-item list-group-item-action border-0 py-3 text-muted">
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
                            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                                <div>
                                    <Link to="/account/orders" className="text-decoration-none text-muted small mb-2 d-block"><i className="fas fa-arrow-left me-1"></i> Quay lại danh sách</Link>
                                    <h5 className="fw-bold mb-0">Chi tiết đơn hàng <span className="text-danger">{id || '#ORD-2023001'}</span></h5>
                                    <small className="text-muted">Ngày đặt: 31/12/2025</small>
                                </div>
                                <span className="badge bg-warning text-dark px-3 py-2">Đang xử lý</span>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6 className="fw-bold text-uppercase small text-muted">Địa chỉ nhận hàng</h6>
                                    <div className="bg-light p-3 rounded">
                                        <p className="fw-bold mb-1">Nguyễn Hiếu</p>
                                        <p className="mb-1 small">0909123456</p>
                                        <p className="mb-0 small">258/69 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q1, TP. HCM</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="fw-bold text-uppercase small text-muted">Thanh toán & Vận chuyển</h6>
                                    <div className="bg-light p-3 rounded">
                                        <p className="mb-1 small">Thanh toán: <span className="fw-bold">COD - Thanh toán khi nhận hàng</span></p>
                                        <p className="mb-0 small">Vận chuyển: <span className="fw-bold">Giao hàng tiêu chuẩn (Miễn phí)</span></p>
                                    </div>
                                </div>
                            </div>

                            <h6 className="fw-bold text-uppercase small text-muted mb-3">Sản phẩm</h6>
                            <div className="table-responsive mb-4">
                                <table className="table align-middle">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Sản phẩm</th>
                                            <th scope="col" className="border-0 text-center">Đơn giá</th>
                                            <th scope="col" className="border-0 text-center">Số lượng</th>
                                            <th scope="col" className="border-0 text-end">Tạm tính</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-0">
                                                <div className="d-flex align-items-center">
                                                    <img src={activeImage} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} className="rounded me-3" />
                                                    <div>
                                                        <h6 className="mb-0 small fw-bold">Kem Dưỡng Da Sulwhasoo...</h6>
                                                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>Dung tích: 50ml</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-0 text-center">8,500,000đ</td>
                                            <td className="border-0 text-center">1</td>
                                            <td className="border-0 text-end fw-bold">8,500,000đ</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="border-top">
                                        <tr>
                                            <td colSpan="3" className="text-end border-0 pt-3">Tạm tính:</td>
                                            <td className="text-end border-0 pt-3 fw-bold">8,500,000đ</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="text-end border-0">Phí vận chuyển:</td>
                                            <td className="text-end border-0 text-success">0đ</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="text-end border-0 pb-0 align-middle">Tổng cộng:</td>
                                            <td className="text-end border-0 pb-0 fw-bold text-danger fs-5">8,500,000đ</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="text-end">
                                <button className="btn btn-outline-danger me-2">Hủy đơn hàng</button>
                                <button className="btn btn-danger" style={{ backgroundColor: '#ff3366', borderColor: '#ff3366' }}>Mua lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetail;
