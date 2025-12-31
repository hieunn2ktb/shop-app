import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // Simulate order processing
        setTimeout(() => {
            navigate('/order-success');
        }, 1000);
    };

    return (
        <section className="bg-light py-5">
            <div className="container">
                <form onSubmit={handlePlaceOrder}>
                    <div className="row">
                        {/* Billing Details */}
                        <div className="col-lg-8 mb-4">
                            <div className="bg-white p-4 shadow-sm rounded">
                                <h4 className="fw-bold mb-4 text-uppercase">Thông tin thanh toán</h4>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <label htmlFor="fullName" className="form-label small text-muted">Họ và tên</label>
                                        <input type="text" className="form-control rounded-0" id="fullName" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label small text-muted">Email</label>
                                        <input type="email" className="form-control rounded-0" id="email" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label small text-muted">Số điện thoại</label>
                                        <input type="text" className="form-control rounded-0" id="phone" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label small text-muted">Địa chỉ</label>
                                        <input type="text" className="form-control rounded-0" id="address" placeholder="Số nhà, tên đường..." required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="city" className="form-label small text-muted">Tỉnh/Thành phố</label>
                                        <select className="form-select rounded-0" id="city" required>
                                            <option value="">Chọn...</option>
                                            <option value="HCM">TP. Hồ Chí Minh</option>
                                            <option value="HN">Hà Nội</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="district" className="form-label small text-muted">Quận/Huyện</label>
                                        <select className="form-select rounded-0" id="district" required>
                                            <option value="">Chọn...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="ward" className="form-label small text-muted">Phường/Xã</label>
                                        <select className="form-select rounded-0" id="ward" required>
                                            <option value="">Chọn...</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <label htmlFor="note" className="form-label small text-muted">Ghi chú đơn hàng (Tùy chọn)</label>
                                        <textarea className="form-control rounded-0" id="note" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="col-lg-4">
                            <div className="bg-white p-4 shadow-sm rounded mb-4">
                                <h4 className="fw-bold mb-4 text-uppercase">Đơn hàng của bạn</h4>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tạm tính</span>
                                    <span className="fw-bold">0đ</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Phí vận chuyển</span>
                                    <span className="fw-bold text-success">Miễn phí</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4">
                                    <span className="fw-bold fs-5">Tổng cộng</span>
                                    <span className="fw-bold fs-5 text-danger">0đ</span>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="cod" defaultChecked />
                                        <label className="form-check-label" htmlFor="cod">
                                            Thanh toán khi nhận hàng (COD)
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="banking" />
                                        <label className="form-check-label" htmlFor="banking">
                                            Chuyển khoản ngân hàng
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-danger w-100 py-3 text-uppercase fw-bold rounded-0" style={{ backgroundColor: '#ff3366', borderColor: '#ff3366' }}>
                                    Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;
