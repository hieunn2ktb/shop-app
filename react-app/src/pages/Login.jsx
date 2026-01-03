import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        fullName: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isRegister) {
                await register(formData);
                alert('Đăng ký thành công! Vui lòng đăng nhập.');
                setIsRegister(false);
            } else {
                await login(formData.username, formData.password);
                navigate('/');
                window.location.reload(); // To update header state
            }
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại!');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card border-0 shadow-sm p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
                <div className="mb-4 text-center">
                    <h3 className="fw-bold" style={{ fontFamily: 'cursive', color: '#ff3366' }}>Linh Cosmetics</h3>
                    <h5 className="mt-3">{isRegister ? 'Đăng Ký Tài Khoản' : 'Đăng Nhập'}</h5>
                </div>

                {error && <div className="alert alert-danger text-center p-2 small">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control py-2"
                            placeholder="Tên đăng nhập"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {isRegister && (
                        <>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Họ và tên"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control py-2"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control py-2"
                            placeholder="Mật khẩu"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-danger py-2 fw-bold" style={{ backgroundColor: '#ff3366', borderColor: '#ff3366' }}>
                            {isRegister ? 'Đăng Ký' : 'Đăng Nhập'}
                        </button>
                    </div>
                </form>

                <div className="text-center mb-4">
                    <button className="btn btn-link text-decoration-none text-primary small" onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký ngay'}
                    </button>
                </div>

                <div className="mb-2 text-center">
                    <Link to="/" className="text-decoration-none text-muted small border-bottom border-muted">Quay lại trang chủ</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
