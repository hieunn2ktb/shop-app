import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light" id="tempaltemo_footer">
            <div className="container py-5">
                <div className="row">
                    {/* Column 1: GIỚI THIỆU */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className="h4 text-uppercase fw-bold border-bottom pb-2 border-secondary mb-4">GIỚI THIỆU</h4>
                        <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                            Linh Cosmetics - Cửa hàng chuyên phân phối các sản phẩm làm đẹp từ các thương hiệu hàng đầu.
                            Thuộc quyền sở hữu của Công ty TNHH Linh Cosmetics. GPKD số: 0316452348 do Sở KHĐT TP.HCM cấp ngày 30/03/2021.
                            Địa chỉ: 258/69 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q1, Tp. HCM
                        </p>
                        <ul className="list-unstyled small text-muted">
                            <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> Showroom chính: 86 Dương Đức Hiền, P. Tây Thạnh, TP. HCM.</li>
                            <li className="mb-2"><i className="fas fa-phone-alt me-2"></i> <a href="tel:0901777483" className="text-decoration-none text-muted">0901777483</a> / <a href="tel:0932621188" className="text-decoration-none text-muted">0932621188</a></li>
                            <li className="mb-2"><i className="fas fa-envelope me-2"></i> <a href="mailto:diep.ndoan@linhcosmetics.vn" className="text-decoration-none text-muted">diep.ndoan@linhcosmetics.vn</a></li>
                        </ul>
                        <div className="mt-3">
                            {/* Badge Placeholder */}
                            <img src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="Da thong bao bo cong thuong" style={{ width: '150px' }} />
                        </div>
                    </div>

                    {/* Column 2: CHÍNH SÁCH */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className="h4 text-uppercase fw-bold border-bottom pb-2 border-secondary mb-4">CHÍNH SÁCH</h4>
                        <ul className="list-unstyled footer-link-list small">
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="/about">Giới Thiệu Về Linh Cosmetics</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="/pages/dieu-khoan-dich-vu">Điều Khoản Dịch Vụ</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="/pages/chinh-sach-van-chuyen">Chính Sách Vận Chuyển</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Chính Sách Đổi Trả</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Hướng Dẫn Thanh Toán</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Chính Sách Bảo Mật</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Thông Tin Hàng Hóa</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Chính Sách Sỉ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: HỖ TRỢ KHÁCH HÀNG */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className="h4 text-uppercase fw-bold border-bottom pb-2 border-secondary mb-4">HỖ TRỢ KHÁCH HÀNG</h4>
                        <ul className="list-unstyled footer-link-list small">
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Tìm Kiếm</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Sản Phẩm Khuyến Mãi</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="/shop">Tất cả sản phẩm</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Hướng Dẫn Thanh Toán</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Kiểm Tra Đơn Hàng</Link></li>
                            <li className="mb-2"><Link className="text-decoration-none text-muted" to="#">Trả Góp 0%</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: KẾT NỐI VỚI CHÚNG TÔI */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className="h4 text-uppercase fw-bold border-bottom pb-2 border-secondary mb-4">KẾT NỐI VỚI CHÚNG TÔI</h4>
                        <div className="mb-3">
                            <label className="sr-only" htmlFor="subscribeEmail">Email</label>
                            <div className="input-group border-bottom border-secondary">
                                <input type="text" className="form-control bg-transparent border-0 text-light py-2" id="subscribeEmail" placeholder="Email" />
                                <div className="input-group-text bg-transparent border-0 text-light"><i className="fas fa-paper-plane"></i></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-secondary rounded p-2 me-2">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://zalo.me"><i className="fas fa-comment fa-lg fa-fw"></i></a> {/* Zalo placeholder */}
                                </li>
                                <li className="list-inline-item border border-secondary rounded p-2 me-2">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://tiktok.com"><i className="fab fa-tiktok fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-secondary rounded p-2 me-2">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://youtube.com"><i className="fab fa-youtube fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-secondary rounded p-2 me-2">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://instagram.com"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-secondary rounded p-2">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://facebook.com"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="h5 text-uppercase fw-bold mb-3">PHƯƠNG THỨC THANH TOÁN</h5>
                            <div className="d-flex gap-2 bg-white p-2 rounded">
                                <i className="fab fa-cc-visa fa-2x text-dark"></i>
                                <i className="fab fa-cc-mastercard fa-2x text-dark"></i>
                                <i className="fab fa-cc-jcb fa-2x text-dark"></i>
                                <i className="fab fa-cc-paypal fa-2x text-dark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-center text-light mb-0 small">
                                Copyright &copy; 2024 Linh Cosmetics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
