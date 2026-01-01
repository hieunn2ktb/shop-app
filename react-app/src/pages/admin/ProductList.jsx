import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../services/adminService';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        const data = await getProducts();
        console.log("Admin Product List Data:", data);
        setProducts(data);
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            try {
                await deleteProduct(id);
                alert("Xóa thành công!");
                loadProducts();
            } catch (error) {
                alert("Xóa thất bại!");
            }
        }
    };

    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Danh sách sản phẩm</h5>
                <Link to="/admin/products/new" className="btn btn-primary btn-sm">
                    <i className="fas fa-plus me-1"></i> Thêm mới
                </Link>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th className="ps-3">ID</th>
                                <th>Tên sản phẩm</th>
                                <th>Danh mục</th>
                                <th>Thương hiệu</th>
                                <th>Giá</th>
                                <th>Kho</th>
                                <th className="text-end pe-3">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-4">Đang tải...</td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-4">Chưa có sản phẩm nào.</td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="ps-3">#{product.id}</td>
                                        <td className="fw-bold">{product.name}</td>
                                        <td><span className="badge bg-info text-dark">{product.category?.name}</span></td>
                                        <td>{product.brand?.name}</td>
                                        <td className="text-danger fw-bold">{product.price?.toLocaleString()}đ</td>
                                        <td>{product.quantity}</td>
                                        <td className="text-end pe-3">
                                            <Link to={`/admin/products/edit/${product.id}`} className="btn btn-sm btn-outline-primary me-2">
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                            <button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-outline-danger">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
