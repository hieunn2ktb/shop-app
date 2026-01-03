const API_BASE_URL = 'http://localhost:8080/api/admin'; // Use relative path for Nginx Proxy

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

export const createProduct = async (productData) => {
    const isFormData = productData instanceof FormData;
    const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
    const body = isFormData ? productData : JSON.stringify(productData);

    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: headers,
        body: body
    });
    if (!response.ok) throw new Error('Failed to create product');
    return await response.json();
};

export const updateProduct = async (id, productData) => {
    const isFormData = productData instanceof FormData;
    const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
    const body = isFormData ? productData : JSON.stringify(productData);

    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: headers,
        body: body
    });
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return true;
};

// --- Brand Services ---

export const getBrands = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/brands`);
        if (!response.ok) throw new Error('Failed to fetch brands');
        return await response.json();
    } catch (error) {
        console.error("Error fetching brands:", error);
        return [];
    }
};

export const getBrandById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/brands/${id}`);
        if (!response.ok) throw new Error('Failed to fetch brand');
        return await response.json();
    } catch (error) {
        console.error("Error fetching brand:", error);
        return null;
    }
};

export const createBrand = async (brandData) => {
    const isFormData = brandData instanceof FormData;
    const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
    const body = isFormData ? brandData : JSON.stringify(brandData);

    const response = await fetch(`${API_BASE_URL}/brands`, {
        method: 'POST',
        headers: headers,
        body: body
    });
    if (!response.ok) throw new Error('Failed to create brand');
    return await response.json();
};

export const updateBrand = async (id, brandData) => {
    const isFormData = brandData instanceof FormData;
    const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
    const body = isFormData ? brandData : JSON.stringify(brandData);

    const response = await fetch(`${API_BASE_URL}/brands/${id}`, {
        method: 'PUT',
        headers: headers,
        body: body
    });
    if (!response.ok) throw new Error('Failed to update brand');
    return await response.json();
};

export const deleteBrand = async (id) => {
    const response = await fetch(`${API_BASE_URL}/brands/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete brand');
    return true;
};
