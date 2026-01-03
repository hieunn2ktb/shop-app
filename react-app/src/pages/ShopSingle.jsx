import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/homeService';
import { addToCart } from '../services/cartService';

const ShopSingle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const data = await getProductById(id);
            if (data) {
                setProduct(data);
                // Set main image if available
                if (data.images && data.images.length > 0) {
                    setMainImage(data.images[0].imageUrl);
                }
            } else {
                // Handle not found
            }
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    const handleQuantityChange = (val) => {
        if (quantity + val >= 1) {
            setQuantity(quantity + val);
        }
    };

    const handleAddToCart = async () => {
        try {
            await addToCart(product.id, quantity);
            alert("Đã thêm vào giỏ hàng!");
            // Optionally update cart count in header or redirect
            window.location.reload(); // Simple refresh to update header cart count for now
        } catch (error) {
            alert(error.message);
            if (error.message.includes("đăng nhập")) {
                navigate('/login');
            }
        }
    };

    const handleBuyNow = async () => {
        try {
            await addToCart(product.id, quantity);
            navigate('/cart');
            window.location.reload(); // Ensure cart is up to date
        } catch (error) {
            alert(error.message);
            if (error.message.includes("đăng nhập")) {
                navigate('/login');
            }
        }
    };

    if (loading) return <div className="text-center py-5">Đang tải sản phẩm...</div>;
    if (!product) return <div className="text-center py-5">Không tìm thấy sản phẩm!</div>;

    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);
    const originalPrice = product.originalPrice ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice) : null;

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    {/* Left Column: Image Carousel */}
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3 border-0">
                            <img
                                className="card-img img-fluid"
                                src={mainImage || 'https://dummyimage.com/500x500/dee2e6/6c757d.jpg'}
                                alt={product.name}
                                id="product-detail"
                                style={{ objectFit: 'contain', height: '500px', backgroundColor: '#fff' }}
                            />
                        </div>
                        {/* Thumbnails (Only show if multiple images) */}
                        {product.images && product.images.length > 1 && (
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center gap-2 overflow-auto">
                                        {product.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setMainImage(img.imageUrl)}
                                            >
                                                <img
                                                    className={`img-fluid border ${mainImage === img.imageUrl ? 'border-primary' : ''}`}
                                                    src={img.imageUrl}
                                                    alt={`Product Image ${idx + 1}`}
                                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="col-lg-7 mt-5">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body">
                                <small className="text-uppercase text-muted">{product.brand ? product.brand.name : 'No Brand'}</small>
                                <h2 className="h2 fw-bold">{product.name}</h2>
                                <p className="text-muted small">Mã SP: {product.id}</p>

                                <div className="d-flex justify-content-start align-items-center mb-3">
                                    <span className="h3 fw-bold text-danger me-3">{formattedPrice}</span>
                                    {originalPrice && <span className="text-muted text-decoration-line-through">{originalPrice}</span>}
                                </div>

                                {product.quantity > 0 ? (
                                    <span className="badge bg-success mb-3">Còn hàng ({product.quantity})</span>
                                ) : (
                                    <span className="badge bg-danger mb-3">Hết hàng</span>
                                )}

                                <div className="mb-4 d-flex align-items-center">
                                    <div className="input-group" style={{ maxWidth: '120px' }}>
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</button>
                                        <input type="text" className="form-control text-center bg-white" value={quantity} readOnly />
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(1)} disabled={quantity >= product.quantity}>+</button>
                                    </div>
                                </div>

                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button
                                            type="button"
                                            className="btn btn-lg text-white"
                                            style={{ backgroundColor: '#ff9999', borderColor: '#ff9999' }}
                                            onClick={handleAddToCart}
                                            disabled={product.quantity <= 0}
                                        >
                                            THÊM VÀO GIỎ
                                        </button>
                                    </div>
                                    <div className="col d-grid">
                                        <button
                                            type="button"
                                            className="btn btn-lg bg-white text-danger fw-bold"
                                            style={{ borderColor: '#ff9999' }}
                                            onClick={handleBuyNow}
                                            disabled={product.quantity <= 0}
                                        >
                                            MUA NGAY
                                        </button>
                                    </div>
                                </div>

                                {/* Description Preview */}
                                <div className="mt-3">
                                    <p>{product.description ? (product.description.length > 200 ? product.description.substring(0, 200) + '...' : product.description) : ''}</p>
                                </div>

                                {/* Policies */}
                                <div className="row mt-4 small text-muted">
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-check-circle text-success mt-1"></i>
                                        <div>Cam kết hàng chính hãng.<br />Đền bù 100% nếu phát hiện hàng giả</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-truck text-success mt-1"></i>
                                        <div>Giao Hàng Miễn Phí Toàn Quốc<br />Áp dụng đơn hàng từ trên 400k</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-sync-alt text-success mt-1"></i>
                                        <div>Đổi trả do lỗi người bán<br />trong vòng 14 ngày</div>
                                    </div>
                                    <div className="col-md-6 mb-2 d-flex align-items-start gap-2">
                                        <i className="fas fa-shipping-fast text-success mt-1"></i>
                                        <div>Giao hàng ngay<br />Nội thành TPHCM</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section for Description/Details */}
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active text-dark fw-bold" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc" type="button" role="tab">MÔ TẢ SẢN PHẨM</button>
                            </li>
                        </ul>
                        <div className="tab-content param p-3 border border-top-0 bg-white" id="myTabContent">
                            <div className="tab-pane fade show active" id="desc" role="tabpanel">
                                <p style={{ whiteSpace: 'pre-line' }}>{product.description || "Chưa có mô tả chi tiết."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ShopSingle;
