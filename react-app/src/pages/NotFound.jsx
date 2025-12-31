import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="text-center p-5">
                <h1 className="fw-bold" style={{ fontSize: '6rem', color: '#ff3366' }}>404</h1>
                <h2 className="fw-bold text-uppercase mb-3">Oops! Không tìm thấy trang.</h2>
                <p className="text-muted mb-4 lead">Trang bạn đang tìm kiếm có thể đã bị xóa hoặc đường dẫn không đúng.</p>
                <Link to="/" className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-bold">
                    <i className="fas fa-home me-2"></i> Trở về trang chủ
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
