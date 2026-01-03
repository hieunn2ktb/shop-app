import React, { useEffect, useState } from 'react';
import { getBrands, deleteBrand } from '../../services/adminService';
import { Link } from 'react-router-dom';

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        loadBrands();
    }, []);

    const loadBrands = async () => {
        const data = await getBrands();
        setBrands(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa thương hiệu này?')) {
            try {
                await deleteBrand(id);
                setBrands(brands.filter(brand => brand.id !== id));
            } catch (error) {
                alert('Xóa thất bại: ' + error.message);
            }
        }
    };

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Quản lý Thương hiệu</h1>
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <i className="fas fa-table me-1"></i>
                        Danh sách Thương hiệu
                    </div>
                    <Link to="/admin/brands/new" className="btn btn-primary btn-sm">
                        <i className="fas fa-plus me-1"></i> Thêm mới
                    </Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Logo</th>
                                <th>Tên Thương hiệu</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map((brand) => (
                                <tr key={brand.id}>
                                    <td>{brand.id}</td>
                                    <td>
                                        {brand.logo ? (
                                            <img src={brand.logo} alt={brand.name} style={{ height: '50px', objectFit: 'contain' }} />
                                        ) : (
                                            'N/A'
                                        )}
                                    </td>
                                    <td>{brand.name}</td>
                                    <td>
                                        <Link to={`/admin/brands/edit/${brand.id}`} className="btn btn-warning btn-sm me-2">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(brand.id)} className="btn btn-danger btn-sm">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrandList;
