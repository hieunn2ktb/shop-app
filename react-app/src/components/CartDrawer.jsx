import React from 'react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`position-fixed top-0 start-0 w-100 h-100 bg-dark ${isOpen ? 'd-block' : 'd-none'}`}
                style={{ opacity: 0.5, zIndex: 1040, transition: 'opacity 0.3s' }}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className="position-fixed top-0 end-0 h-100 bg-white shadow-lg"
                style={{
                    width: '400px',
                    maxWidth: '90%',
                    zIndex: 1050,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out'
                }}
            >
                <div className="d-flex flex-column h-100">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                        <h5 className="mb-0 text-uppercase fw-bold">Giỏ hàng</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>

                    {/* Body - Empty State */}
                    <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <i className="fas fa-shopping-cart fa-3x mb-3 text-muted"></i>
                        <p className="text-muted">Hiện chưa có sản phẩm</p>
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-top">
                        <div className="row g-2">
                            <div className="col-6">
                                <Link to="/cart" onClick={onClose} className="btn btn-danger w-100 text-uppercase fw-bold py-2 d-block text-decoration-none" style={{ fontSize: '0.8rem', backgroundColor: '#ff6666', borderColor: '#ff6666' }}>Chi tiết giỏ hàng</Link>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-outline-danger w-100 text-uppercase fw-bold py-2" style={{ fontSize: '0.8rem', borderColor: '#ff6666', color: '#ff6666' }}>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
