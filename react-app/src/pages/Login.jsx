import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card border-0 shadow-sm p-4 text-center" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
                <div className="mb-4">
                    <h3 className="fw-bold" style={{ fontFamily: 'cursive', color: '#ff3366' }}>Linh Cosmetics</h3>
                </div>

                <div className="d-grid gap-3 mb-3">
                    <button className="btn btn-light border py-2 d-flex align-items-center justify-content-center gap-2 fw-bold" style={{ backgroundColor: '#f5f5f5', borderColor: '#ddd' }}>
                        <i className="fab fa-google text-danger"></i> Tiếp tục với Google
                    </button>
                    <button className="btn btn-dark py-2 d-flex align-items-center justify-content-center gap-2 fw-bold">
                        <i className="fab fa-apple"></i> Tiếp tục với Apple
                    </button>
                </div>

                <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">Hoặc</span>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control py-2" placeholder="Nhập email/số điện thoại" />
                </div>

                <div className="d-grid mb-4">
                    <button className="btn btn-danger py-2 fw-bold text-uppercase" style={{ backgroundColor: '#ffcccc', color: '#fff', borderColor: '#ffcccc' }}>Tiếp tục</button>
                </div>

                <div className="mb-4">
                    <Link to="/" className="text-decoration-none text-muted small border-bottom border-muted">Quay lại và tiếp tục mua hàng</Link>
                </div>

                <div className="mt-4">
                    <small className="text-muted" style={{ fontSize: '0.7rem' }}>Powered by Linh Cosmetics</small>
                </div>
            </div>
        </div>
    );
};

export default Login;
