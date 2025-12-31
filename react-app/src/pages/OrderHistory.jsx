import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
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
                            <h4 className="fw-bold mb-4">Đơn hàng của bạn</h4>
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="py-3 ps-3">Mã đơn hàng</th>
                                            <th scope="col" className="py-3">Ngày đặt</th>
                                            <th scope="col" className="py-3">Trạng thái</th>
                                            <th scope="col" className="py-3">Tổng tiền</th>
                                            <th scope="col" className="py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="ps-3 fw-bold text-dark">#ORD-2023001</td>
                                            <td className="text-muted">31/12/2025</td>
                                            <td><span className="badge bg-warning text-dark">Đang xử lý</span></td>
                                            <td className="fw-bold text-danger">8,500,000đ</td>
                                            <td className="text-end pe-3"><Link to="/account/orders/ORD-2023001" className="btn btn-sm btn-outline-dark">Chi tiết</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 fw-bold text-dark">#ORD-2023000</td>
                                            <td className="text-muted">15/12/2025</td>
                                            <td><span className="badge bg-success">Giao thành công</span></td>
                                            <td className="fw-bold text-danger">2,100,000đ</td>
                                            <td className="text-end pe-3"><Link to="/account/orders/ORD-2023000" className="btn btn-sm btn-outline-dark">Chi tiết</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderHistory;
