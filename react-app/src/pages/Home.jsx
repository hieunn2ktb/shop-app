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
    if (imgName && imgName.trim() !== '') return imgName;
    return feat1; // Fallback
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
        cleansing: [],
        trial: []
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
                                        <Link to="/shop" state={{ category: cat.name }} className="text-decoration-none text-dark">
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

                                        <Link to={`/shop-single/${item.id}`}>
                                            <img
                                                src={resolveImage(item.images?.[0]?.imageUrl)}
                                                className="card-img-top p-3"
                                                alt={item.name}
                                                style={{ height: '250px', objectFit: 'contain' }}
                                            />
                                        </Link>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted" style={{ fontSize: '0.75rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
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
                                            <div className="border rounded p-1 text-center d-flex align-items-center justify-content-center hover-shadow" style={{ height: '130px' }}>
                                                <img
                                                    src={resolveImage(brand.logo)}
                                                    className="img-fluid"
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(100%)', opacity: '0.7', transition: 'all 0.3s' }}
                                                    onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }}
                                                    onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}
                                                    alt={brand.name}
                                                />
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
                            {(sections.makeup && sections.makeup.length > 0 ? sections.makeup : [
                                // Fallback/Loading state or keep empty for now
                            ]).map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            {item.originalPrice > item.price && (
                                                <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2 rounded-0">
                                                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                </span>
                                            )}
                                            {/* Icons */}
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

                                            <Link to={`/shop-single/${item.id}`}>
                                                <img
                                                    src={resolveImage(item.images?.[0]?.imageUrl)}
                                                    className="card-img-top p-3"
                                                    alt={item.name}
                                                    style={{ height: '250px', objectFit: 'contain' }}
                                                />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2">
                                            <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark d-block mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="d-flex align-items-baseline">
                                                <span className="text-warning fw-bold me-2">{item.price?.toLocaleString()}đ</span>
                                                {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
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
                            {(sections.faceCare && sections.faceCare.length > 0 ? sections.faceCare : [
                                // Fallback/Loading state or keep empty
                            ]).map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            {item.originalPrice > item.price && (
                                                <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                </span>
                                            )}
                                            {/* Icons */}
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

                                            <Link to={`/shop-single/${item.id}`}>
                                                <img
                                                    src={resolveImage(item.images?.[0]?.imageUrl)}
                                                    className="card-img-top p-3"
                                                    alt={item.name}
                                                    style={{ height: '250px', objectFit: 'contain' }}
                                                />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price?.toLocaleString()}đ</span>
                                                    {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
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
                            {(sections.sets && sections.sets.length > 0 ? sections.sets : [
                                // Fallback/Loading state or keep empty
                            ]).map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            {item.originalPrice > item.price && (
                                                <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                </span>
                                            )}
                                            {/* Icons */}
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

                                            <Link to={`/shop-single/${item.id}`}>
                                                <img
                                                    src={resolveImage(item.images?.[0]?.imageUrl)}
                                                    className="card-img-top p-3"
                                                    alt={item.name}
                                                    style={{ height: '250px', objectFit: 'contain' }}
                                                />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price?.toLocaleString()}đ</span>
                                                    {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
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
                            {(sections.sunCare && sections.sunCare.length > 0 ? sections.sunCare : [
                                // Fallback
                            ]).map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100 border-0 shadow-sm position-relative">
                                        <div className="position-relative">
                                            {/* Discount Badge */}
                                            {item.originalPrice > item.price && (
                                                <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                </span>
                                            )}
                                            {/* Icons */}
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

                                            <Link to={`/shop-single/${item.id}`}>
                                                <img
                                                    src={resolveImage(item.images?.[0]?.imageUrl)}
                                                    className="card-img-top p-3"
                                                    alt={item.name}
                                                    style={{ height: '250px', objectFit: 'contain' }}
                                                />
                                            </Link>
                                        </div>

                                        <div className="card-body p-2 d-flex flex-column">
                                            <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                            <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
                                                <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                            </Link>
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price?.toLocaleString()}đ</span>
                                                    {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
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
                                {(sections.cleansing && sections.cleansing.length > 0 ? sections.cleansing : []).reduce((acc, item, index) => {
                                    const chunkIndex = Math.floor(index / 5);
                                    if (!acc[chunkIndex]) acc[chunkIndex] = [];
                                    acc[chunkIndex].push(item);
                                    return acc;
                                }, []).length === 0 ? (
                                    // Empty Logic if needed
                                    <div className="text-center">Đang cập nhật...</div>
                                ) : (
                                    (sections.cleansing || []).reduce((acc, item, index) => {
                                        const chunkIndex = Math.floor(index / 5);
                                        if (!acc[chunkIndex]) acc[chunkIndex] = [];
                                        acc[chunkIndex].push(item);
                                        return acc;
                                    }, []).map((chunk, i) => (
                                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                            <div className="row row-cols-2 row-cols-md-5 g-3">
                                                {chunk.map((item, index) => (
                                                    <div key={index} className="col">
                                                        <div className="card h-100 border-0 shadow-sm position-relative">
                                                            <div className="position-relative">
                                                                {/* Discount Badge */}
                                                                {item.originalPrice > item.price && (
                                                                    <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                                        -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                                    </span>
                                                                )}
                                                                {/* Icons */}
                                                                <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                                    <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                                    <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                                </div>
                                                                <Link to={`/shop-single/${item.id}`}>
                                                                    <img src={resolveImage(item.images?.[0]?.imageUrl)} className="card-img-top p-3" alt={item.name} style={{ height: '250px', objectFit: 'contain' }} />
                                                                </Link>
                                                            </div>
                                                            <div className="card-body p-2 d-flex flex-column">
                                                                <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                                                <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
                                                                    <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                                </Link>
                                                                <div className="mt-auto">
                                                                    <div className="d-flex align-items-baseline">
                                                                        <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price?.toLocaleString()}đ</span>
                                                                        {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
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
                                {(sections.trial && sections.trial.length > 0 ? sections.trial : []).reduce((acc, item, index) => {
                                    const chunkIndex = Math.floor(index / 5);
                                    if (!acc[chunkIndex]) acc[chunkIndex] = [];
                                    acc[chunkIndex].push(item);
                                    return acc;
                                }, []).length === 0 ? (
                                    // Empty Logic if needed
                                    <div className="text-center">Đang cập nhật...</div>
                                ) : (
                                    (sections.trial || []).reduce((acc, item, index) => {
                                        const chunkIndex = Math.floor(index / 5);
                                        if (!acc[chunkIndex]) acc[chunkIndex] = [];
                                        acc[chunkIndex].push(item);
                                        return acc;
                                    }, []).map((chunk, i) => (
                                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                            <div className="row row-cols-2 row-cols-md-5 g-3">
                                                {chunk.map((item, index) => (
                                                    <div key={index} className="col">
                                                        <div className="card h-100 border-0 shadow-sm position-relative">
                                                            <div className="position-relative">
                                                                {/* Discount Badge */}
                                                                {item.originalPrice > item.price && (
                                                                    <span className="position-absolute top-0 start-0 badge m-2 rounded-0" style={{ backgroundColor: '#ff6600' }}>
                                                                        -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                                    </span>
                                                                )}
                                                                {/* Icons */}
                                                                <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                                                                    <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="far fa-heart"></i></button>
                                                                    <button className="btn btn-sm btn-outline-secondary bg-white rounded-circle p-1" style={{ width: '30px', height: '30px' }}><i className="fas fa-shopping-bag"></i></button>
                                                                </div>
                                                                <Link to={`/shop-single/${item.id}`}>
                                                                    <img src={resolveImage(item.images?.[0]?.imageUrl)} className="card-img-top p-3" alt={item.name} style={{ height: '250px', objectFit: 'contain' }} />
                                                                </Link>
                                                            </div>
                                                            <div className="card-body p-2 d-flex flex-column">
                                                                <small className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem' }}>{item.brand?.name || "Linh Cosmetics"}</small>
                                                                <Link to={`/shop-single/${item.id}`} className="text-decoration-none text-dark mb-2">
                                                                    <h6 className="card-title text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                                                </Link>
                                                                <div className="mt-auto">
                                                                    <div className="d-flex align-items-baseline">
                                                                        <span className="fw-bold me-2" style={{ color: '#ff6600' }}>{item.price?.toLocaleString()}đ</span>
                                                                        {item.originalPrice && <small className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>{item.originalPrice.toLocaleString()}đ</small>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;
