import React from 'react';

const Account = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="bg-white rounded shadow-sm p-4 text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '60px', height: '60px', fontSize: '1.5rem', backgroundColor: '#e91e63' }}>TT</div>
                                <div className="ms-3 text-start">
                                    <h6 className="mb-0 fw-bold">ThemeSyntaxError</h6>
                                    <small className="text-muted">ThemeSyntaxError</small>
                                    <small className="d-block text-muted" style={{ fontSize: '0.7rem' }}>nguyennh.hieuu108@gmail.com</small>
                                </div>
                            </div>
                        </div>

                        <div className="list-group shadow-sm rounded border-0">
                            <a href="#" className="list-group-item list-group-item-action active border-0 py-3 fw-bold" style={{ backgroundColor: '#ff8888', borderColor: '#ff8888' }}>
                                <i className="fas fa-user-circle me-2"></i> Thông tin cá nhân
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-box-open me-2"></i> Đơn hàng của bạn
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-heart me-2"></i> Sản phẩm yêu thích
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-map-marker-alt me-2"></i> Địa chỉ giao hàng
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0 py-3 text-muted">
                                <i className="fas fa-sign-out-alt me-2"></i> Đăng xuất
                            </a>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="bg-white rounded shadow-sm p-5">
                            <h4 className="fw-bold mb-4">Thông tin tài khoản</h4>
                            <form>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="fullName" className="col-sm-3 col-form-label text-muted small">Họ và tên</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control rounded-pill" id="fullName" defaultValue="Nguyễn Hiếu" />
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label className="col-sm-3 col-form-label text-muted small">Giới tính</label>
                                    <div className="col-sm-9">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="genderMale" defaultChecked />
                                            <label className="form-check-label" htmlFor="genderMale">Nam</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="genderFemale" />
                                            <label className="form-check-label" htmlFor="genderFemale">Nữ</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="address" className="col-sm-3 col-form-label text-muted small">Địa chỉ</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control rounded-pill" id="address" defaultValue="ThemeSyntaxError" />
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="country" className="col-sm-3 col-form-label text-muted small">Quốc gia</label>
                                    <div className="col-sm-9">
                                        <select className="form-select rounded-pill" id="country">
                                            <option value="Vietnam">Vietnam</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="city" className="col-sm-3 col-form-label text-muted small">Tỉnh thành</label>
                                    <div className="col-sm-9">
                                        <select className="form-select rounded-pill" id="city">
                                            <option value="HCM">Thành phố Hồ Chí Minh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="email" className="col-sm-3 col-form-label text-muted small">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control rounded-pill" id="email" defaultValue="nguyennh.hieuu108@gmail.com" />
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="phone" className="col-sm-3 col-form-label text-muted small">Số điện thoại</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control rounded-pill" id="phone" defaultValue="ThemeSyntaxError" />
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label htmlFor="dob" className="col-sm-3 col-form-label text-muted small">Ngày sinh</label>
                                    <div className="col-sm-9">
                                        <input type="date" className="form-control rounded-pill" id="dob" />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-danger text-uppercase fw-bold px-5 rounded-pill" style={{ backgroundColor: '#ff8888', borderColor: '#ff8888' }}>Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
