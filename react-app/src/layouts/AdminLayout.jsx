import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AdminLayout = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path) ? 'bg-primary text-white' : 'text-dark hover-light';
    };

    return (
        <div className="d-flex min-vh-100 bg-light">
            {/* Sidebar */}
            <div className="bg-white border-end shadow-sm" style={{ width: '250px', flexShrink: 0 }}>
                <div className="p-3 border-bottom text-center">
                    <h4 className="m-0 fw-bold text-primary">Admin Panel</h4>
                    <small className="text-muted">Linh Cosmetics</small>
                </div>
                <div className="p-3">
                    <ul className="nav flex-column gap-2">
                        <li className="nav-item">
                            <Link to="/admin/dashboard" className={`nav-link rounded ${isActive('/admin/dashboard')}`}>
                                <i className="fas fa-chart-line me-2"></i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/products" className={`nav-link rounded ${isActive('/admin/products')}`}>
                                <i className="fas fa-box me-2"></i> Sản phẩm
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/brands" className={`nav-link rounded ${isActive('/admin/brands')}`}>
                                <i className="fas fa-tags me-2"></i> Thương hiệu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/orders" className={`nav-link rounded ${isActive('/admin/orders')}`}>
                                <i className="fas fa-shopping-cart me-2"></i> Đơn hàng
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/users" className={`nav-link rounded ${isActive('/admin/users')}`}>
                                <i className="fas fa-users me-2"></i> Người dùng
                            </Link>
                        </li>
                        <li className="nav-item mt-4">
                            <Link to="/" className="nav-link text-danger rounded">
                                <i className="fas fa-sign-out-alt me-2"></i> Quay lại Web
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 d-flex flex-column" style={{ overflowX: 'hidden' }}>
                <header className="bg-white border-bottom shadow-sm p-3 d-flex justify-content-between align-items-center">
                    <h5 className="m-0 text-capitalize">{location.pathname.split('/')[2] || 'Dashboard'}</h5>
                    <div className="d-flex align-items-center gap-3">
                        <span className="text-muted">Admin User</span>
                        <div className="bg-secondary rounded-circle" style={{ width: '32px', height: '32px' }}></div>
                    </div>
                </header>
                <main className="p-4 flex-grow-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
