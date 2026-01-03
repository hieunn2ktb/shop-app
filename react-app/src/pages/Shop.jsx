import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFilterOptions, searchProducts } from '../services/homeService';
import { addToCart } from '../services/cartService';

// Fallback images
import cat1 from '../assets/img/category_img_01.jpg';
import feat1 from '../assets/img/feature_prod_01.jpg';

const Shop = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    // Filter States
    const [selectedBrands, setSelectedBrands] = useState(
        location.state?.brand ? [location.state.brand] : []
    );
    const [selectedCategories, setSelectedCategories] = useState(
        location.state?.category ? [location.state.category] : []
    ); // "Loại sản phẩm"
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

    // Pagination
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    const priceRanges = [
        { label: 'Dưới 500.000đ', min: 0, max: 500000 },
        { label: '500.000đ - 5.000.000đ', min: 500000, max: 5000000 },
        { label: '5.000.000đ - 15.000.000đ', min: 5000000, max: 15000000 },
        { label: '15.000.000đ - 30.000.000đ', min: 15000000, max: 30000000 },
        { label: 'Trên 30.000.000đ', min: 30000000, max: null }
    ];

    useEffect(() => {
        if (location.state?.category) {
            setSelectedCategories([location.state.category]);
        }
        if (location.state?.brand) {
            setSelectedBrands([location.state.brand]);
        }
    }, [location.state]);

    useEffect(() => {
        fetchProducts();
    }, [page, selectedBrands, selectedCategories, selectedPriceRanges]);

    const fetchProducts = async () => {
        let minPrice = null;
        let maxPrice = null;

        if (selectedPriceRanges.length > 0) {
            const ranges = priceRanges.filter((_, idx) => selectedPriceRanges.includes(idx));
            const mins = ranges.map(r => r.min).filter(m => m !== null);
            const maxs = ranges.map(r => r.max).filter(m => m !== null);

            if (mins.length > 0) minPrice = Math.min(...mins);
            if (maxs.length > 0) {
                // If any range has null max (unlimited), then maxPrice is null
                if (ranges.some(r => r.max === null)) {
                    maxPrice = null;
                } else {
                    maxPrice = Math.max(...maxs);
                }
            }
        }

        const filter = {
            brands: selectedBrands,
            categories: selectedCategories,
            minPrice: minPrice,
            maxPrice: maxPrice,
            page: page,
            size: 12,
            sort: "id,desc"
        };

        try {
            const [productData, filterData] = await Promise.all([
                searchProducts(filter),
                getFilterOptions(filter)
            ]);

            if (productData) {
                setProducts(productData.content);
                setTotalPages(productData.totalPages);
                setTotalElements(productData.totalElements);
            }
            if (filterData) {
                setBrands(filterData.brands);
                setCategories(filterData.categories);
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleBrandChange = (brandName) => {
        setPage(0);
        setSelectedBrands(prev =>
            prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
        );
    };

    const handleCategoryChange = (catName) => {
        setPage(0);
        setSelectedCategories(prev =>
            prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
        );
    };

    const handlePriceChange = (index) => {
        setPage(0);
        setSelectedPriceRanges(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const resolveImage = (imgName) => {
        if (imgName && imgName.trim() !== '') return imgName;
        return feat1;
    };

    const handleAddToCart = async (productId) => {
        try {
            await addToCart(productId, 1);
            alert('Đã thêm vào giỏ hàng!');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Sidebar Filter */}
                <div className="col-lg-3">
                    <h3 className="h4 mb-4">Lọc sản phẩm</h3>

                    {/* Brand Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h6 className="m-0 fw-bold">Thương hiệu</h6>
                            <i className="fas fa-chevron-down small"></i>
                        </div>
                        <ul className="list-unstyled" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {brands.map((brandName, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        id={`brand-${idx}`}
                                        checked={selectedBrands.includes(brandName)}
                                        onChange={() => handleBrandChange(brandName)}
                                    />
                                    <label htmlFor={`brand-${idx}`} className="small text-muted">{brandName}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h6 className="m-0 fw-bold">Lọc Giá</h6>
                            <i className="fas fa-chevron-down small"></i>
                        </div>
                        <ul className="list-unstyled">
                            {priceRanges.map((range, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        id={`price-${idx}`}
                                        checked={selectedPriceRanges.includes(idx)}
                                        onChange={() => handlePriceChange(idx)}
                                    />
                                    <label htmlFor={`price-${idx}`} className="small text-muted">{range.label}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Category (Type) Filter */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h6 className="m-0 fw-bold">Loại sản phẩm</h6>
                            <i className="fas fa-chevron-down small"></i>
                        </div>
                        <ul className="list-unstyled" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {categories.map((catName, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        id={`cat-${idx}`}
                                        checked={selectedCategories.includes(catName)}
                                        onChange={() => handleCategoryChange(catName)}
                                    />
                                    <label htmlFor={`cat-${idx}`} className="small text-muted">{catName}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                    {/* Toolbar (Optional, e.g. Sorting, Count) */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="text-muted">Hiển thị {products.length} / {totalElements} sản phẩm</span>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        {products.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <p>Không tìm thấy sản phẩm nào phù hợp.</p>
                            </div>
                        ) : (
                            products.map((item, index) => (
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
                                                    onClick={() => handleAddToCart(item.id)}
                                                >
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                            </div>

                                            <Link to={`/shop-single/${item.id}`}>
                                                <img
                                                    src={resolveImage(item.images?.[0]?.imageUrl)}
                                                    className="card-img-top p-3"
                                                    alt={item.name}
                                                    style={{ height: '200px', objectFit: 'contain' }}
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
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center mt-5">
                            <nav>
                                <ul className="pagination">
                                    <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setPage(p => Math.max(0, p - 1))}>
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                    </li>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => setPage(i)} style={page === i ? { backgroundColor: '#ff6600', borderColor: '#ff6600' } : { color: '#333' }}>
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}>
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
