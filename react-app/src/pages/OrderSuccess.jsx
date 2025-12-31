import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center bg-white p-5 shadow-sm rounded">
                <div className="mb-4">
                    <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                </div>
                <h2 className="fw-bold mb-3 text-uppercase">Đặt hàng thành công!</h2>
                <p className="text-muted mb-4">Cảm ơn bạn đã mua sắm tại Linh Cosmetics. <br /> Mã đơn hàng của bạn là <span className="fw-bold text-dark">#ORD-2023001</span>.</p>
                <div className="d-flex gap-3 justify-content-center">
                    <Link to="/account" className="btn btn-outline-dark px-4 py-2">Quản lý đơn hàng</Link>
                    <Link to="/" className="btn btn-danger px-4 py-2" style={{ backgroundColor: '#ff3366', borderColor: '#ff3366' }}>Tiếp tục mua sắm</Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
