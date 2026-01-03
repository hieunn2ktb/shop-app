import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createProduct, getProductById, updateProduct } from '../../services/adminService';

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        originalPrice: '',
        quantity: '',
        description: '',
        category: '',
        brand: '',
        imageUrl: '',
        imageFiles: [] // Changed from imageFile: null
    });

    useEffect(() => {
        if (isEditMode) {
            loadProduct();
        }
    }, [id]);

    const loadProduct = async () => {
        const data = await getProductById(id);
        if (data) {
            setFormData({
                name: data.name,
                price: data.price,
                originalPrice: data.originalPrice,
                quantity: data.quantity,
                description: data.description,
                category: data.category?.id || '',
                brand: data.brand?.id || '',
                imageUrl: data.images?.[0]?.imageUrl || '',
                imageFiles: []
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            imageFiles: Array.from(e.target.files) // Convert FileList to Array
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = new FormData();
            payload.append('name', formData.name);
            payload.append('price', formData.price);
            payload.append('originalPrice', formData.originalPrice);
            payload.append('quantity', formData.quantity);
            payload.append('description', formData.description);
            payload.append('categoryId', formData.category);
            payload.append('brandId', formData.brand);

            if (formData.imageFiles.length > 0) {
                formData.imageFiles.forEach(file => {
                    payload.append('images', file); // Append each file with key 'images'
                });
            } else {
                payload.append('imageUrl', formData.imageUrl);
            }

            if (isEditMode) {
                await updateProduct(id, payload);
                alert("Cập nhật thành công!");
            } else {
                await createProduct(payload);
                alert("Thêm mới thành công!");
            }
            navigate('/admin/products');
        } catch (error) {
            console.error(error);
            alert("Có lỗi xảy ra, vui lòng thử lại: " + error.message);
        }
    };

    return (
        <div className="card border-0 shadow-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">{isEditMode ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h5>
            </div>
            <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Tên sản phẩm</label>
                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Giá bán</label>
                            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Giá gốc</label>
                            <input type="number" className="form-control" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Số lượng kho</label>
                            <input type="number" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Danh mục (ID)</label>
                            <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} placeholder="VD: 1" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Thương hiệu (ID)</label>
                            <input type="text" className="form-control" name="brand" value={formData.brand} onChange={handleChange} placeholder="VD: 1" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ảnh sản phẩm (Chọn nhiều ảnh)</label>
                        <input type="file" className="form-control mb-2" onChange={handleFileChange} accept="image/*" multiple />
                        <label className="form-label text-muted small">Hoặc nhập URL ảnh (chỉ ảnh chính):</label>
                        <input type="text" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://..." />

                        {/* Preview Section */}
                        {(formData.imageFiles.length > 0 || formData.imageUrl) && (
                            <div className="mt-2">
                                <span className="small text-muted d-block mb-1">Preview: </span>
                                <div className="d-flex gap-2 flex-wrap">
                                    {formData.imageFiles.length > 0 ? (
                                        formData.imageFiles.map((file, idx) => (
                                            <div key={idx} className="border p-1 rounded">
                                                <span className="text-success fw-bold small">{file.name}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <img src={formData.imageUrl} alt="Preview" style={{ height: '50px' }} />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Mô tả</label>
                        <textarea className="form-control" rows="4" name="description" value={formData.description} onChange={handleChange}></textarea>
                    </div>

                    <div className="d-flex gap-2 justify-content-end">
                        <Link to="/admin/products" className="btn btn-secondary">Hủy bỏ</Link>
                        <button type="submit" className="btn btn-primary px-4">{isEditMode ? 'Lưu thay đổi' : 'Tạo mới'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
