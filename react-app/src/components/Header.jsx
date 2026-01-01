import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';

// Import local logo (assuming it's available or use a placeholder similar to original)
// Note: User didn't provide logo asset, so styling a text logo or using a placeholder.
// The screenshot shows a graphical logo. For now, we will use a text or placeholder image but structure effectively.

const Header = ({ onOpenCart }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = getCurrentUser();
            if (currentUser) {
                setUser(currentUser);
                // Fetch Cart Count
                try {
                    const { getCart } = await import('../services/cartService'); // Dynamic import to avoid circular dependency if any
                    const cart = await getCart();
                    if (cart && cart.items) {
                        setCartCount(cart.items.length);
                    }
                } catch (error) {
                    console.log("Error loading cart count", error);
                }
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
        logout();
        setUser(null);
        navigate('/');
        window.location.reload();
    };

    return (
        <header className="bg-white shadow-sm sticky-top">
            {/* Top Bar: Logo, Search, Hotline, User Icons */}
            <div className="container py-3 border-bottom">
                <div className="row align-items-center">
                    {/* ... logos and search ... */}
                    {/* Logo (Left) */}
                    <div className="col-lg-2 col-md-3">
                        <Link className="text-decoration-none" to="/">
                            {/* Simulating the logo from the screenshot */}
                            <h1 className="h1 text-success fw-bold m-0" style={{ fontFamily: 'cursive', color: '#ff3366' }}>Linh Cosmetics</h1>
                        </Link>
                    </div>

                    {/* Search Bar (Center) */}
                    <div className="col-lg-6 col-md-5 d-none d-md-block">
                        <div className="input-group">
                            <input type="text" className="form-control border-end-0" placeholder="Bạn đang tìm gì..." aria-label="Search" style={{ borderColor: '#ff3366' }} />
                            <button className="btn bg-white border-start-0" type="button" style={{ borderColor: '#ff3366', color: '#333' }}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    {/* Hotline & Icons (Right) */}
                    <div className="col-lg-4 col-md-4 text-end d-flex justify-content-end align-items-center gap-3">
                        {/* Hotline */}
                        <div className="d-flex align-items-center d-none d-lg-flex">
                            <i className="fas fa-phone-alt fa-lg me-2 text-dark"></i>
                            <div className="text-start">
                                <small className="d-block text-muted" style={{ fontSize: '0.75rem' }}>Hotline</small>
                                <span className="fw-bold" style={{ color: '#ff3366' }}>093.262.1188</span>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="d-flex gap-3 align-items-center">
                            <a href="#" className="text-dark position-relative"><i className="fas fa-map-marker-alt fa-lg"></i></a>

                            {/* Auth Section */}
                            {user ? (
                                <div className="dropdown">
                                    <a href="#" className="text-dark d-flex align-items-center text-decoration-none dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user-circle fa-lg me-1 text-primary"></i>
                                        <span className="d-none d-md-inline small fw-bold">{user.username}</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                        <li><Link className="dropdown-item" to="/account">Tài khoản của tôi</Link></li>
                                        <li><Link className="dropdown-item" to="/account/orders">Đơn mua</Link></li>
                                        {user.role === 'ROLE_ADMIN' && (
                                            <li><Link className="dropdown-item text-primary" to="/admin/products">Trang Admin</Link></li>
                                        )}
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item text-danger" onClick={handleLogout}>Đăng xuất</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/login" className="text-dark position-relative" title="Đăng nhập">
                                    <i className="fas fa-user fa-lg"></i>
                                </Link>
                            )}

                            <a href="#" className="text-dark position-relative">
                                <i className="fas fa-heart fa-lg"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>0</span>
                            </a>
                            <button className="btn p-0 border-0 text-dark position-relative" onClick={() => navigate('/cart')}>
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>{cartCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Navigation */}
            <div className="container d-none d-lg-block">
                <div className="row align-items-center">
                    {/* Catalog Dropdown Button */}
                    <div className="col-auto p-0">
                        <div className="dropdown">
                            <button className="btn fw-bold rounded-0 d-flex align-items-center gap-2 py-3 px-4" type="button" style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
                                <i className="fas fa-bars"></i>
                                DANH MỤC SẢN PHẨM
                            </button>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="col">
                        <ul className="nav justify-content-start gap-3">
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Thương Hiệu <i className="fas fa-chevron-down small text-muted ms-1"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Chăm Sóc Da Mặt <i className="fas fa-chevron-down small text-muted ms-1"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Trang Điểm <i className="fas fa-chevron-down small text-muted ms-1"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Bộ Sản Phẩm</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Chăm Sóc Cơ Thể</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Chăm Sóc Tóc</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold text-dark app-nav-link" to="/shop" style={{ fontSize: '0.85rem' }}>Chăm Sóc Da Dành Cho Nam</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Header (Search input moved here for mobile if needed, or keeping it strictly responsive) */}
            <div className="container d-block d-md-none py-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Bạn đang tìm gì..." />
                    <button className="btn btn-secondary" type="button"><i className="fa fa-search"></i></button>
                </div>
            </div>

        </header>
    )
}

export default Header;
