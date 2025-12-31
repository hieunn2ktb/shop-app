import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card border-0 shadow-sm p-4 text-center" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
                <div className="mb-4">
                    <h3 className="fw-bold" style={{ fontFamily: 'cursive', color: '#ff3366' }}>Linh Cosmetics</h3>
                    <h5 className="fw-bold mt-3">Quên mật khẩu?</h5>
                    <p className="text-muted small">Nhập email của bạn để nhận liên kết đặt lại mật khẩu.</p>
                </div>

                <form>
                    <div className="mb-4">
                        <input type="email" className="form-control py-2" placeholder="Nhập email của bạn" required />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-danger py-2 fw-bold text-uppercase" style={{ backgroundColor: '#ffcccc', color: '#fff', borderColor: '#ffcccc' }}>Gửi yêu cầu</button>
                    </div>
                </form>

                <div className="mt-3">
                    <Link to="/login" className="text-decoration-none text-muted small"><i className="fas fa-arrow-left me-1"></i> Quay lại đăng nhập</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
