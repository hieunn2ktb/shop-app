import React from 'react';
import { Link } from 'react-router-dom';

const PolicyLayout = ({ title, children }) => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Left Sidebar */}
                    <div className="col-lg-3">
                        <div className="bg-white shadow-sm p-4 mb-4">
                            <h5 className="fw-bold text-uppercase border-bottom pb-2 mb-3">Danh mục</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/" className="text-decoration-none text-muted">Trang chủ</Link></li>
                                <li className="mb-2"><Link to="/shop" className="text-decoration-none text-muted">Sản phẩm</Link></li>
                                <li className="mb-2"><Link to="/blog" className="text-decoration-none text-muted">Blog</Link></li>
                                <li className="mb-2"><Link to="/about" className="text-decoration-none text-muted">Giới thiệu</Link></li>
                            </ul>
                        </div>

                        <div className="bg-white shadow-sm p-4">
                            <h5 className="fw-bold text-uppercase border-bottom pb-2 mb-3">Sản phẩm bán chạy</h5>
                            {/* Placeholder for Best Sellers - could be a component */}
                            <p className="text-muted small">Đang cập nhật...</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9">
                        <div className="bg-white shadow-sm p-5">
                            <h2 className="fw-bold mb-4">{title}</h2>
                            <div className="policy-content text-muted" style={{ lineHeight: '1.8' }}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicyLayout;
