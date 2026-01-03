import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getBrandById, createBrand, updateBrand } from '../../services/adminService';

const BrandForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        name: '',
        logoFile: null,
        logoUrl: ''
    });

    useEffect(() => {
        if (isEditMode) {
            loadBrand();
        }
    }, [id]);

    const loadBrand = async () => {
        const brand = await getBrandById(id);
        if (brand) {
            setFormData({
                name: brand.name,
                logoUrl: brand.logo || '',
                logoFile: null
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, logoFile: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append('name', formData.name);
        if (formData.logoFile) {
            payload.append('file', formData.logoFile);
        }

        try {
            if (isEditMode) {
                await updateBrand(id, payload);
                alert('Cập nhật thành công!');
            } else {
                await createBrand(payload);
                alert('Tạo mới thành công!');
            }
            navigate('/admin/brands');
        } catch (error) {
            alert('Lỗi: ' + error.message);
        }
    };

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">{isEditMode ? 'Cập nhật Thương hiệu' : 'Thêm mới Thương hiệu'}</h1>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-edit me-1"></i>
                    Thông tin Thương hiệu
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Tên Thương hiệu</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Logo</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {formData.logoUrl && !formData.logoFile && (
                                <div className="mt-2">
                                    <img src={formData.logoUrl} alt="Preview" style={{ height: '100px' }} />
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            {isEditMode ? 'Cập nhật' : 'Tạo mới'}
                        </button>
                        <Link to="/admin/brands" className="btn btn-secondary">Hủy</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BrandForm;
