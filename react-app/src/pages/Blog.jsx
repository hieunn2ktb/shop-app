import React from 'react';
import { Link } from 'react-router-dom';
// Using existing placeholder since blog folder is missing
import placeholderImg from '../assets/img/feature_prod_01.jpg';

const Blog = () => {
    // Dummy Data
    const posts = [
        { id: 1, title: 'Top 5 serum dưỡng ẩm cho mùa đông', date: '31/12/2023', excerpt: 'Mùa đông đến khiến da khô nứt nẻ, hãy cùng tìm hiểu top 5 serum cấp ẩm tốt nhất...' },
        { id: 2, title: 'Bí quyết chăm sóc da mụn hiệu quả', date: '25/12/2023', excerpt: 'Da mụn luôn là nỗi ám ảnh. Bài viết này sẽ chia sẻ quy trình skincare tối giản cho da mụn...' },
        { id: 3, title: 'Review bộ sản phẩm Ohui The First', date: '20/12/2023', excerpt: 'Đánh giá chi tiết bộ sản phẩm tái sinh da cao cấp từ thương hiệu Ohui...' },
        { id: 4, title: 'Xu hướng trang điểm năm 2024', date: '15/12/2023', excerpt: 'Cập nhật những xu hướng makeup mới nhất sẽ lên ngôi trong năm 2024...' },
    ];

    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1 fw-bold">Tin Tức & Blog</h1>
                        <p>
                            Cập nhật kiến thức làm đẹp và xu hướng mới nhất cùng Linh Cosmetics.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {posts.map(post => (
                        <div key={post.id} className="col-12 col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <Link to={`/blog/${post.id}`}>
                                    <img src={placeholderImg} className="card-img-top" alt={post.title} style={{ height: '250px', objectFit: 'cover' }} />
                                </Link>
                                <div className="card-body">
                                    <p className="text-muted small mb-2"><i className="far fa-clock me-1"></i> {post.date}</p>
                                    <h5 className="card-title fw-bold">
                                        <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">{post.title}</Link>
                                    </h5>
                                    <p className="card-text text-muted">{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className="btn btn-outline-danger btn-sm rounded-pill fw-bold" style={{ color: '#ff3366', borderColor: '#ff3366' }}>Đọc tiếp</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
