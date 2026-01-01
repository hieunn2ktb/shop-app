import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart, removeFromCart } from '../services/cartService';
import activeImage from '../assets/img/feature_prod_01.jpg'; // Using existing asset for placeholder

import { checkout } from '../services/orderService';
import { getCurrentUser } from '../services/authService';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        receiverName: '',
        phoneNumber: '',
        shippingAddress: '',
        note: ''
    });

    // Load user info for default form data
    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setFormData(prev => ({
                ...prev,
                receiverName: user.fullName || user.username || '',
                phoneNumber: user.phone || '' // Assuming user might have phone later
            }));
        }
    }, []);

    const loadCart = async () => {
        try {
            const data = await getCart();
            setCart(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleRemove = async (itemId) => {
        if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            try {
                await removeFromCart(itemId);
                loadCart();
            } catch (error) {
                alert('Có lỗi xảy ra khi xóa sản phẩm');
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = async () => {
        if (!formData.receiverName || !formData.phoneNumber || !formData.shippingAddress) {
            alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
            return;
        }

        try {
            await checkout({
                ...formData,
                paymentMethod: 'COD' // Default for now
            });
            alert("Đặt hàng thành công! Đơn hàng của bạn đang được xử lý.");
            // Reset cart UI
            setCart(null);
            // Optionally redirect to order history
        } catch (error) {
            alert("Đặt hàng thất bại: " + error.message);
        }
    };

    const totalPrice = cart?.items?.reduce((total, item) => total + (item.product.price * item.quantity), 0) || 0;

    if (loading) return <div className="text-center py-5">Đang tải giỏ hàng...</div>;

    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Left Column: Cart Items */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                                    <h5 className="fw-bold text-uppercase mb-0">Giỏ hàng:</h5>
                                    <span className="text-muted small text-decoration-underline">{cart?.items?.length || 0} Sản phẩm</span>
                                </div>

                                {/* Free Ship Notice */}
                                <div className="alert alert-danger border-0 d-flex align-items-center" role="alert" style={{ backgroundColor: '#ffe6e6', color: '#cc0000' }}>
                                    <i className="fas fa-truck me-2"></i>
                                    <div>Mua từ <span className="fw-bold">399k</span> để được <span className="fw-bold">FREESHIP</span></div>
                                </div>

                                {/* Cart Items List */}
                                {cart && cart.items && cart.items.length > 0 ? (
                                    cart.items.map((item) => (
                                        <div key={item.id} className="row mb-4 border-bottom pb-3 align-items-center">
                                            <div className="col-3">
                                                <img
                                                    src={item.product.image || activeImage}
                                                    className="img-fluid rounded"
                                                    alt={item.product.name}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <h6 className="fw-bold mb-1">{item.product.name}</h6>
                                                <div className="text-muted small mb-2">{item.product.brand?.name}</div>
                                                <div className="fw-bold text-danger">{item.product.price.toLocaleString()}đ</div>
                                                <div className="small text-muted">x {item.quantity}</div>
                                            </div>
                                            <div className="col-3 text-end">
                                                <button className="btn btn-link text-danger p-0" onClick={() => handleRemove(item.id)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-5">
                                        <p className="text-muted mb-3">Giỏ hàng của bạn đang trống.</p>
                                        <Link to="/shop" className="btn btn-danger">Mua sắm ngay</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Info */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h5 className="fw-bold text-uppercase border-bottom pb-3 mb-3">Thông tin giao hàng</h5>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">Tên người nhận <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="receiverName" value={formData.receiverName} onChange={handleInputChange} placeholder="Nguyễn Văn A" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">Số điện thoại <span className="text-danger">*</span></label>
                                    <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="09xxx..." />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">Địa chỉ giao hàng <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="shippingAddress" value={formData.shippingAddress} onChange={handleInputChange} placeholder="Số nhà, Đường, Quận/Huyện..." />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">Ghi chú</label>
                                    <textarea className="form-control" rows="2" name="note" value={formData.note} onChange={handleInputChange} placeholder="Giao hàng giờ hành chính..."></textarea>
                                </div>

                                <div className="d-flex justify-content-between mb-4 mt-4 pt-3 border-top">
                                    <span className="fw-bold">Tổng thanh toán:</span>
                                    <span className="fw-bold text-danger fs-4">{totalPrice.toLocaleString()}đ</span>
                                </div>

                                <button
                                    className="btn btn-danger w-100 text-uppercase fw-bold py-3 mb-3"
                                    style={{ backgroundColor: '#ff3366' }}
                                    disabled={!cart?.items?.length}
                                    onClick={handleCheckout}
                                >
                                    Đặt hàng
                                </button>

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
