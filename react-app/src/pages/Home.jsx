import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getBrands, getFlashSaleProducts, getProductSections } from '../services/homeService';
import { addToCart } from '../services/cartService';
import banner1 from '../assets/img/banner_img_01.jpg';
import banner2 from '../assets/img/banner_img_02.jpg';
import banner3 from '../assets/img/banner_img_03.jpg';
import cat1 from '../assets/img/category_img_01.jpg';
import cat2 from '../assets/img/category_img_02.jpg';
import cat3 from '../assets/img/category_img_03.jpg';
import feat1 from '../assets/img/feature_prod_01.jpg';
import feat2 from '../assets/img/feature_prod_02.jpg';
import feat3 from '../assets/img/feature_prod_03.jpg';
import brand1 from '../assets/img/brand_01.png';
import brand2 from '../assets/img/brand_02.png';
import brand3 from '../assets/img/brand_03.png';
import brand4 from '../assets/img/brand_04.png';

// Helper to resolve image (using placeholder if null/empty for now)
const resolveImage = (imgName) => {
    if (!imgName) return feat1;
    // Logic to handle real URLs vs local assets would go here
    return feat1; // Fallback for now since DB images might be just filenames
};

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [flashSale, setFlashSale] = useState([]);
    const [sections, setSections] = useState({
        makeup: [],
        faceCare: [],
        sets: [],
        sunCare: [],
        cleansing: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const cats = await getCategories();
            if (cats.length > 0) setCategories(cats);

            const brs = await getBrands();
            if (brs.length > 0) setBrands(brs);

            const fs = await getFlashSaleProducts();
            if (fs.length > 0) setFlashSale(fs);

            const secs = await getProductSections();
            // Merge with existing structure if needed, or just set
            setSections(prev => ({ ...prev, ...secs }));
        };
        fetchData();
    }, []);

    // ... render ... 
    return (
        <main>
            {/* 1. Hero Slider */}
            <section id="home-slider" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#home-slider" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#home-slider" data-bs-slide-to="1"></li>
                    <li data-bs-target="#home-slider" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src={banner1} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>Linh</b> Cosmetics</h1>
                                        <h3 className="h2">Tinh hoa mỹ phẩm chính hãng</h3>
                                        <p>
                                            Khám phá vẻ đẹp rạng ngời với các sản phẩm từ Whoo, Ohui, Sum37...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add other slider items similarly if needed */}
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#home-slider" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#home-slider" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </section>

            {/* 2. Section Category */}
            <section id="section-category" className="container py-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <div className="row text-left pb-3">
                            <div className="col-12">
                                <h4 className="h4 text-uppercase fw-bold border-bottom pb-2">
                                    <i className="fas fa-list-ul me-2"></i> DANH MỤC NỔI BẬT
                                </h4>
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-7 g-3 text-center">
                            {(categories.length > 0 ? categories : [
                                { name: "Son Môi", image: null },
                                { name: "Tẩy Da Chết", image: null },
                                { name: "Tẩy Trang", image: null },
                                { name: "Mặt Nạ", image: null },
                                { name: "Kem Dưỡng", image: null },
                                { name: "Kem Dưỡng Mắt", image: null },
                                { name: "Phấn Phủ", image: null },
                            ]).map((cat, index) => (
                                <div key={index} className="col">
                                    <div className="category-item p-2 h-100">
                                        <Link to="/shop" className="text-decoration-none text-dark">
                                            <div className="mb-2">
                                                <img
                                                    src={resolveImage(cat.image)}
                                                    className="img-fluid rounded-circle border"
                                                    alt={cat.name}
                                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{cat.name}</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Section Flash Sale */}
            <section id="section-flash-sale" className="container pb-5">
                <div className="card border-0 shadow-sm" style={{ backgroundColor: '#ffc1c1', borderRadius: '15px' }}>
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="d-flex align-items-center">
                                <h2 className="h2 fw-bold text-uppercase fst-italic" style={{ color: '#ffec00', textShadow: '2px 2px 4px #ff0000', fontSize: '2.5rem' }}>
                                    <i className="fas fa-bolt me-2"></i>Flash Sale
                                </h2>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex gap-2 text-center">
                                    <div className="bg-white rounded p-1 px-2">
                                        <div className="fw-bold">00</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Ngày</small>
                                    </div>
                                    <div className="bg-white rounded p-1 px-2">
                                        <div className="fw-bold">00</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Giờ</small>
                                    </div>
                                    <div className="bg-white rounded p-1 px-2">
                                        <div className="fw-bold">00</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Phút</small>
                                    </div>
                                    <div className="bg-white rounded p-1 px-2">
                                        <div className="fw-bold">00</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Giây</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product List */}
                        <div className="row row-cols-2 row-cols-md-5 g-3">
                            {/* Product Items */}
                            {(flashSale.length > 0 ? flashSale : [
                                // Fallback dummy data if API returns empty (optional, for demo)
                                { name: "Demo Product 1", brand: "DEMO", price: 100000, originalPrice: 200000, quantity: 10, images: [] },
                                { name: "Demo Product 2", brand: "DEMO", price: 200000, originalPrice: 300000, quantity: 5, images: [] }
                            ]).map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        {/* Discount Badge */}
                                        {item.originalPrice > item.price && (
                                            <span className="position-absolute top-0 start-0 badge bg-danger m-2">
                                                -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                            </span>
                                        )}
                                        {/* Wishlist and Cart Icons */}
                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1"
                                                style={{ width: '30px', height: '30px' }}
                                                onClick={async () => {
                                                    try {
                                                        await addToCart(item.id, 1);
                                                        alert('Đã thêm vào giỏ hàng!');
                                                    } catch (err) {
                                                        alert(err.message);
                                                    }
                                                }}
                                            >
                                                <i className="fas fa-shopping-bag"></i>
                                            </button>
                                        </div>

                                        <Link to="/shop-single">
                                            <img src={resolveImage(item.images?.[0]?.imageUrl)} className="card-img-top p-3" alt={item.name} />
                                        </Link>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted" style={{ fontSize: '0.75rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to="/shop-single" className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>

                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline mb-1">
                                                    <span className="text-danger fw-bold me-2">{item.price?.toLocaleString()}đ</span>
                                                    {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.8rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
                                                </div>

                                                {/* Sold Progress Bar */}
                                                <div className="progress position-relative" style={{ height: '18px', borderRadius: '10px', backgroundColor: '#ffbdae' }}>
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style={{ width: '50%' }}
                                                        aria-valuenow="50"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                    <small className="position-absolute w-100 text-center text-white fw-bold" style={{ fontSize: '0.7rem', lineHeight: '18px' }}>
                                                        Đã bán {item.quantity ? 100 - item.quantity : 10} sản phẩm
                                                    </small>
                                                    <span className="position-absolute start-0 ms-1 text-white">🔥</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center mt-4">
                            <Link to="/shop" className="btn btn-light text-dark fw-bold px-4 py-2 shadow-sm rounded-pill">
                                Xem tất cả <i className="fas fa-chevron-right ms-1" style={{ fontSize: '0.8rem' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Section Brand */}
            <section id="section-brand" className="container py-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                            <h4 className="h4 text-uppercase fw-bold mb-0">
                                <i className="fas fa-crown me-2"></i> THƯƠNG HIỆU NỔI BẬT
                            </h4>
                            <Link to="/shop" className="text-muted text-decoration-none small">Xem tất cả <i className="fas fa-chevron-right"></i></Link>
                        </div>

                        {/* Content */}
                        <div className="row">
                            {/* Left Banner */}
                            <div className="col-lg-4 col-md-5 mb-3 mb-md-0 d-flex">
                                <div className="w-100 position-relative rounded overflow-hidden">
                                    <img src={banner2} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="Brand Banner" />
                                    <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white text-center">
                                        <h5 className="fw-bold">Linh Cosmetics</h5>
                                        <small>Cam kết hàng chính hãng</small>
                                    </div>
                                </div>
                            </div>

                            {/* Right Brand Grid */}
                            <div className="col-lg-8 col-md-7">
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-2 h-100">
                                    {(brands.length > 0 ? brands : [
                                        { name: "Brand 1", logo: null }, { name: "Brand 2", logo: null }, { name: "Brand 3", logo: null }
                                    ]).map((brand, index) => (
                                        <div key={index} className="col">
                                            <div className="border rounded p-3 text-center h-100 d-flex align-items-center justify-content-center hover-shadow" style={{ minHeight: '130px' }}>
                                                <img src={resolveImage(brand.logo)} className="img-fluid" style={{ maxHeight: '60px', filter: 'grayscale(100%)', opacity: '0.7', transition: 'all 0.3s' }}
                                                    onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }}
                                                    onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}
                                                    alt={brand.name} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Section Makeup */}
            <section id="section-makeup" className="container py-5">
                <div className="card border-0 shadow-sm" style={{ backgroundColor: '#f9f3f0' }}> {/* Light beige background matches the image feel */}
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-magic me-2"></i> TRANG ĐIỂM
                            </h3>
                            <Link to="/shop" className="text-muted text-decoration-none small">Xem tất cả <i className="fas fa-chevron-right"></i></Link>
                        </div>

                        {/* Product Grid */}
                        <div className="row row-cols-2 row-cols-md-5 g-3">
                            {[
                                { name: "[Mới] Kem BB Trang Điểm Chống Nắng The Whoo...", brand: "WHOO", price: "800.000đ", oldPrice: "1.350.000đ", discount: "-30%", img: feat1 },
                                { name: "Bảng Phấn Mắt Ohui Real Color Eye Palette 9 màu", brand: "OHUI", price: "450.000đ", oldPrice: "620.000đ", discount: "-27%", img: feat2 },
                                { name: "Bộ Kem BB Trang Điểm Chống Nắng The Whoo Gongjinhyang...", brand: "WHOO", price: "800.000đ", oldPrice: "1.300.000đ", discount: "-38%", img: feat3 },
                                { name: "Bộ Kem Lót Trang Điểm Whoo Gongjinhyang Mi Essential...", brand: "WHOO", price: "750.000đ", oldPrice: "1.300.000đ", discount: "-42%", img: feat1 },
                                { name: "Bộ Kem Nền Dạng Thỏi Ohui Ultimate Cover Stick...", brand: "OHUI", price: "750.000đ", oldPrice: "1.300.000đ", discount: "-42%", img: feat2 },
                            ].map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2 rounded-0">
                                                {item.discount}
                                            </span>
                                            {/* Icons */}
                                            <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="far fa-heart"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                            </div>

                                            <Link to="/shop-single">
                                                <img src={item.img} className="card-img-top p-3" alt={item.name} />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                            <Link to="/shop-single" className="text-decoration-none text-dark d-block mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="d-flex align-items-baseline">
                                                <span className="text-warning fw-bold me-2">{item.price}</span>
                                                <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Section Face Care */}
            <section id="section-face-care" className="container py-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-spa me-2"></i> CHĂM SÓC DA MẶT
                            </h3>
                        </div>

                        {/* Product Grid */}
                        <div className="row row-cols-2 row-cols-md-5 g-3 mb-4">
                            {[
                                { name: "[Mẫu Mới] Kem Dưỡng Da Sulwhasoo The Ultimate S...", brand: "SULWHASOO", price: "8.500.000đ", oldPrice: "11.500.000đ", discount: "-26%", img: cat1 },
                                { name: "[Mới] Kem BB Trang Điểm Chống Nắng The Whoo Gongjinhyang...", brand: "WHOO", price: "800.000đ", oldPrice: "1.250.000đ", discount: "-36%", img: cat2 },
                                { name: "[MỚI] Set Sữa Rửa Mặt Ohui Age Recovery Soft Amino Foam...", brand: "OHUI", price: "650.000đ", oldPrice: "850.000đ", discount: "-24%", img: cat3 },
                                { name: "[MỚI] Set Tinh Chất Tự Sinh Chống Lão Hóa Whoo Bichup...", brand: "WHOO", price: "2.290.000đ", oldPrice: "3.500.000đ", discount: "-35%", img: feat1 },
                                { name: "[MỚI] Set Tinh Chất Tự Sinh Chống Lão Hóa Whoo Bichup...", brand: "WHOO", price: "2.900.000đ", oldPrice: "6.000.000đ", discount: "-52%", img: feat2 },
                                { name: "[MỚI] Set Tinh Chất Tự Sinh Chống Lão Hóa Whoo Bichup...", brand: "WHOO", price: "4.990.000đ", oldPrice: "8.600.000đ", discount: "-42%", img: feat3 },
                                { name: "[Phiên bản giàu dưỡng] Bộ Kem Dưỡng Chống Lão Hóa Nhân...", brand: "SULWHASOO", price: "3.900.000đ", oldPrice: "5.400.000đ", discount: "-28%", img: cat1 },
                                { name: "[SALE] Tinh Chất Tẩy Da Chết Dưỡng Trắng Sum37...", brand: "SUM37", price: "1.650.000đ", oldPrice: "3.000.000đ", discount: "-45%", img: cat2 },
                                { name: "[Tháng 12/2026] Kem Dưỡng Tái Sinh Chống Lão Hóa Da Ohui...", brand: "OHUI", price: "2.900.000đ", oldPrice: "5.900.000đ", discount: "-51%", img: cat3 },
                                { name: "[XẢ DATE 2026] Bộ Dưỡng Da Dành Cho Nam Giới Whoo...", brand: "WHOO", price: "1.190.000đ", oldPrice: "2.900.000đ", discount: "-59%", img: feat1 },
                            ].map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                {item.discount}
                                            </span>
                                            {/* Icons */}
                                            <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="far fa-heart"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                            </div>

                                            <Link to="/shop-single">
                                                <img src={item.img} className="card-img-top p-3" alt={item.name} />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                            <Link to="/shop-single" className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                    <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link to="/shop" className="btn text-white fw-bold px-5 py-2 rounded-3" style={{ backgroundColor: '#ff9999' }}>
                                Xem tất cả »
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Section Product Sets */}
            <section id="section-product-sets" className="container py-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-gift me-2"></i> BỘ SẢN PHẨM
                            </h3>
                        </div>

                        {/* Product Grid */}
                        <div className="row row-cols-2 row-cols-md-5 g-3 mb-4">
                            {[
                                { name: "[Phiên bản giàu dưỡng] Bộ Kem Dưỡng Chống Lão Hóa Nhân...", brand: "SULWHASOO", price: "3.900.000đ", oldPrice: "5.400.000đ", discount: "-28%", img: cat1 },
                                { name: "[XẢ DATE 2026] Bộ Dưỡng Da Dành Cho Nam Giới Whoo...", brand: "WHOO", price: "1.190.000đ", oldPrice: "2.900.000đ", discount: "-59%", img: cat2 },
                                { name: "Bộ Chống Lão Hóa Ohui Tím Ohui Age Recovery Special Set...", brand: "OHUI", price: "1.790.000đ", oldPrice: "3.500.000đ", discount: "-49%", img: cat3 },
                                { name: "Bộ Dầu Gội và Xả Whoo Spa Shampoo & Rinse", brand: "WHOO", price: "990.000đ", oldPrice: "1.600.000đ", discount: "-38%", img: feat1 },
                                { name: "Bộ Dưỡng Ẩm Ohui Miracle Moisture 2pcs Special Set Mẫu...", brand: "OHUI", price: "1.250.000đ", oldPrice: "1.900.000đ", discount: "-34%", img: feat2 },
                                { name: "Bộ Dưỡng Da 2 Tầng Tái Sinh Cao Cấp Whoo Cheongidan Pr...", brand: "WHOO", price: "10.200.000đ", oldPrice: "17.000.000đ", discount: "-40%", img: feat3 },
                                { name: "Bộ Dưỡng Da Chống Lão Hóa Cao Cấp 2 Tầng Whoo...", brand: "WHOO", price: "16.800.000đ", oldPrice: "20.000.000đ", discount: "-40%", img: cat1 },
                                { name: "Bộ Dưỡng Da Chống Lão Hóa Cao Cấp The Whoo...", brand: "WHOO", price: "4.390.000đ", oldPrice: "7.200.000đ", discount: "-39%", img: cat2 },
                                { name: "Bộ Dưỡng Da Chống Lão Hóa Nhân Sâm Sulwhasoo...", brand: "SULWHASOO", price: "3.200.000đ", oldPrice: "4.100.000đ", discount: "-22%", img: cat3 },
                                { name: "Bộ Dưỡng Da Chống Lão Hóa Sum37 LosecSumma 4pcs...", brand: "SUM37", price: "3.690.000đ", oldPrice: "6.700.000đ", discount: "-45%", img: feat1 },
                            ].map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                {item.discount}
                                            </span>
                                            {/* Icons */}
                                            <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="far fa-heart"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                            </div>

                                            <Link to="/shop-single">
                                                <img src={item.img} className="card-img-top p-3" alt={item.name} />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                            <Link to="/shop-single" className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                    <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link to="/shop" className="btn text-white fw-bold px-5 py-2 rounded-3" style={{ backgroundColor: '#ff9999' }}>
                                Xem tất cả »
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Section Sun Care */}
            <section id="section-sun-care" className="container py-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-sun me-2"></i> CHỐNG NẮNG
                            </h3>
                        </div>

                        {/* Product Grid */}
                        <div className="row row-cols-2 row-cols-md-5 g-3 mb-4">
                            {[
                                { name: "[Mới] Kem BB Trang Điểm Chống Nắng The Whoo...", brand: "WHOO", price: "800.000đ", oldPrice: "1.250.000đ", discount: "-36%", img: feat1 },
                                { name: "Bộ Kem BB Trang Điểm Chống Nắng The Whoo...", brand: "WHOO", price: "800.000đ", oldPrice: "1.300.000đ", discount: "-38%", img: feat2 },
                                { name: "Bộ Kem Chống Nắng Chống Nhăn Whoo...", brand: "WHOO", price: "850.000đ", oldPrice: "1.600.000đ", discount: "-47%", img: feat3 },
                                { name: "Bộ Kem Chống Nắng Đa Tính Năng SUM37...", brand: "SUM37", price: "1.050.000đ", oldPrice: "", discount: "", img: cat1 },
                                { name: "Bộ Kem Chống Nắng Nâng Tone SUM37 Sun-...", brand: "SUM37", price: "750.000đ", oldPrice: "1.200.000đ", discount: "-38%", img: cat2 },
                                { name: "Bộ Kem Chống Nắng Ohui Day Shield Perfect Sun...", brand: "OHUI", price: "700.000đ", oldPrice: "1.100.000đ", discount: "-36%", img: cat3 },
                                { name: "Bộ Kem Chống Nắng Sum37 Làm Mát Da Sun...", brand: "SUM37", price: "750.000đ", oldPrice: "1.200.000đ", discount: "-38%", img: feat1 },
                                { name: "Bộ Phấn Chống Nắng The Whoo UV Ultimate Anti...", brand: "WHOO", price: "790.000đ", oldPrice: "1.400.000đ", discount: "-44%", img: feat2 },
                                { name: "Bộ Tinh Chất Chống Nắng Chống Lão Hóa Làm Dịu...", brand: "WHOO", price: "690.000đ", oldPrice: "1.350.000đ", discount: "-49%", img: feat3 },
                                { name: "Bộ Tinh Chất Chống Nắng Chống Lão Hóa Làm Dịu...", brand: "WHOO", price: "890.000đ", oldPrice: "1.400.000đ", discount: "-36%", img: cat1 },
                            ].map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            {item.discount && (
                                                <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                    {item.discount}
                                                </span>
                                            )}
                                            {/* Icons */}
                                            <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="far fa-heart"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                            </div>

                                            <Link to="/shop-single">
                                                <img src={item.img} className="card-img-top p-3" alt={item.name} />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                            <Link to="/shop-single" className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                    {item.oldPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link to="/shop" className="btn text-white fw-bold px-5 py-2 rounded-3" style={{ backgroundColor: '#ff9999' }}>
                                Xem tất cả »
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Section Skin Cleansing */}
            <section id="section-cleansing" className="container py-5">
                <div className="card border-0 shadow-sm bg-white">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-bath me-2"></i> LÀM SẠCH DA
                            </h3>
                            <Link to="/shop" className="text-muted text-decoration-none small">Xem tất cả <i className="fas fa-chevron-right"></i></Link>
                        </div>

                        {/* Carousel */}
                        <div id="carouselCleansing" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators custom-indicators">
                                <button type="button" data-bs-target="#carouselCleansing" data-bs-slide-to="0" className="active" aria-current="true"></button>
                                <button type="button" data-bs-target="#carouselCleansing" data-bs-slide-to="1"></button>
                            </div>
                            <div className="carousel-inner pb-2">
                                <div className="carousel-item active">
                                    <div className="row row-cols-2 row-cols-md-5 g-3">
                                        {[
                                            { name: "60 gói Tẩy Da Chết Làm Sáng Da Whoo Brightening Gel 1ml*60", brand: "KHÁC", price: "400.000đ", oldPrice: "1.000.000đ", discount: "-60%", img: feat1 },
                                            { name: "[MỚI] Set Sữa Rửa Mặt Ohui Age Recovery Soft Amino Foam...", brand: "OHUI", price: "650.000đ", oldPrice: "850.000đ", discount: "-24%", img: cat3 },
                                            { name: "[SALE] Tinh Chất Tẩy Da Chết Dưỡng Trắng Sum37 LosecSumm...", brand: "SUM37", price: "1.650.000đ", oldPrice: "3.000.000đ", discount: "-45%", img: cat2 },
                                            { name: "Bộ Dầu Tẩy Trang Ohui Miracle Moisture Cleansing Oil", brand: "OHUI", price: "550.000đ", oldPrice: "750.000đ", discount: "-27%", img: feat2 },
                                            { name: "Bộ Nước Tẩy Trang Dịu Nhẹ SUM37 Skin Saver Essential Pure...", brand: "SUM37", price: "650.000đ", oldPrice: "800.000đ", discount: "-19%", img: feat3 },
                                        ].map((item, index) => (
                                            <div key={index} className="col">
                                                <div className="card h-100 border-0 shadow-sm">
                                                    <div className="position-relative">
                                                        <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>{item.discount}</span>
                                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                        </div>
                                                        <Link to="/shop-single"><img src={item.img} className="card-img-top p-3" alt={item.name} /></Link>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                                        <Link to="/shop-single" className="text-decoration-none text-dark d-block mb-2">
                                                            <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                        </Link>
                                                        <div className="d-flex align-items-baseline">
                                                            <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                            <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-2 row-cols-md-5 g-3">
                                        {[
                                            { name: "Sữa Rửa Mặt Tạo Bọt Dịu Nhẹ...", brand: "OHUI", price: "600.000đ", oldPrice: "800.000đ", discount: "-25%", img: cat1 },
                                            { name: "Nước Cân Bằng Da Whoo Radiant...", brand: "WHOO", price: "1.200.000đ", oldPrice: "1.500.000đ", discount: "-20%", img: cat2 },
                                            { name: "Gel Tẩy Tế Bào Chết Sum37...", brand: "SUM37", price: "900.000đ", oldPrice: "1.200.000đ", discount: "-25%", img: cat3 },
                                            { name: "Sữa Rửa Mặt Chống Lão Hóa...", brand: "SULWHASOO", price: "850.000đ", oldPrice: "1.100.000đ", discount: "-22%", img: feat1 },
                                            { name: "Nước Tẩy Trang Mắt Môi...", brand: "WHOO", price: "750.000đ", oldPrice: "950.000đ", discount: "-21%", img: feat2 },
                                        ].map((item, index) => (
                                            <div key={index} className="col">
                                                <div className="card h-100 border-0 shadow-sm">
                                                    <div className="position-relative">
                                                        <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>{item.discount}</span>
                                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                        </div>
                                                        <Link to="/shop-single"><img src={item.img} className="card-img-top p-3" alt={item.name} /></Link>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                                        <Link to="/shop-single" className="text-decoration-none text-dark d-block mb-2">
                                                            <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                        </Link>
                                                        <div className="d-flex align-items-baseline">
                                                            <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                            <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Section Trial */}
            <section id="section-trial" className="container py-5">
                <div className="card border-0 shadow-sm bg-white">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="h3 fw-bold text-uppercase" style={{ color: '#333' }}>
                                <i className="fas fa-flask me-2"></i> DÙNG THỬ
                            </h3>
                            <Link to="/shop" className="text-muted text-decoration-none small">Xem tất cả <i className="fas fa-chevron-right"></i></Link>
                        </div>

                        {/* Carousel */}
                        <div id="carouselTrial" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators custom-indicators">
                                <button type="button" data-bs-target="#carouselTrial" data-bs-slide-to="0" className="active" aria-current="true"></button>
                                <button type="button" data-bs-target="#carouselTrial" data-bs-slide-to="1"></button>
                            </div>
                            <div className="carousel-inner pb-2">
                                <div className="carousel-item active">
                                    <div className="row row-cols-2 row-cols-md-5 g-3">
                                        {[
                                            { name: "60 gói Tẩy Da Chết Làm Sáng Da Whoo Brightening Gel 1ml*60", brand: "KHÁC", price: "400.000đ", oldPrice: "1.000.000đ", discount: "-60%", img: feat1 },
                                            { name: "Bộ Dầu Gội và Dầu Xả Giảm Gàu Và Gãy Rụng Beyond Healing For...", brand: "BEYOND", price: "149.000đ", oldPrice: "300.000đ", discount: "-50%", img: cat1 },
                                            { name: "Bộ Dưỡng Ẩm Chống Lão Hóa Whoo Vàng Whoo Gongjinhyang...", brand: "WHOO", price: "450.000đ", oldPrice: "1.000.000đ", discount: "-55%", img: feat3 },
                                            { name: "Bộ Dưỡng Da Ohui Hồng Ohui Miracle Moisture Mini 5pcs", brand: "OHUI", price: "390.000đ", oldPrice: "750.000đ", discount: "-48%", img: cat2 },
                                            { name: "Bộ Dưỡng Da Tái Sinh Whoo Cheonyuldan Ultimate...", brand: "WHOO", price: "790.000đ", oldPrice: "2.900.000đ", discount: "-73%", img: feat2 },
                                        ].map((item, index) => (
                                            <div key={index} className="col">
                                                <div className="card h-100 border-0 shadow-sm">
                                                    <div className="position-relative">
                                                        <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>{item.discount}</span>
                                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                        </div>
                                                        <Link to="/shop-single"><img src={item.img} className="card-img-top p-3" alt={item.name} /></Link>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                                        <Link to="/shop-single" className="text-decoration-none text-dark d-block mb-2">
                                                            <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                        </Link>
                                                        <div className="d-flex align-items-baseline">
                                                            <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                            <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-2 row-cols-md-5 g-3">
                                        {[
                                            { name: "Set Mini Dưỡng Trắng...", brand: "OHUI", price: "350.000đ", oldPrice: "600.000đ", discount: "-42%", img: cat3 },
                                            { name: "Set Mini Cấp Ẩm Sum37...", brand: "SUM37", price: "400.000đ", oldPrice: "700.000đ", discount: "-43%", img: feat1 },
                                            { name: "Gói Dùng Thử Kem Mắt...", brand: "WHOO", price: "50.000đ", oldPrice: "100.000đ", discount: "-50%", img: cat1 },
                                            { name: "Gói Dùng Thử Tinh Chất...", brand: "SULWHASOO", price: "60.000đ", oldPrice: "120.000đ", discount: "-50%", img: feat2 },
                                            { name: "Set Mini Chống Lão Hóa...", brand: "OHUI", price: "500.000đ", oldPrice: "900.000đ", discount: "-44%", img: cat2 },
                                        ].map((item, index) => (
                                            <div key={index} className="col">
                                                <div className="card h-100 border-0 shadow-sm">
                                                    <div className="position-relative">
                                                        <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>{item.discount}</span>
                                                        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                            <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                        </div>
                                                        <Link to="/shop-single"><img src={item.img} className="card-img-top p-3" alt={item.name} /></Link>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand}</small>
                                                        <Link to="/shop-single" className="text-decoration-none text-dark d-block mb-2">
                                                            <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                        </Link>
                                                        <div className="d-flex align-items-baseline">
                                                            <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price}</span>
                                                            <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.oldPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;
