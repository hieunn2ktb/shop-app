const API_BASE_URL = '/api/home'; // Updated to use proxy

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`);
        if (!response.ok) throw new Error('Failed to fetch categories');
        return await response.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

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

export const getFlashSaleProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/flash-sale`);
        if (!response.ok) throw new Error('Failed to fetch flash sale products');
        return await response.json();
    } catch (error) {
        console.error("Error fetching flash sale:", error);
        return [];
    }
};

export const getProductSections = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sections`);
        if (!response.ok) throw new Error('Failed to fetch product sections');
        return await response.json();
    } catch (error) {
        console.error("Error fetching sections:", error);
        return {};
    }
};

export const searchProducts = async (filter) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filter),
        });
        if (!response.ok) throw new Error('Failed to search products');
        return await response.json();
    } catch (error) {
        console.error("Error searching products:", error);
        return { content: [], totalPages: 0 };
    }
};

export const getFilterOptions = async (filter) => {
    try {
        const response = await fetch(`${API_BASE_URL}/filter-options`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filter),
        });
        if (!response.ok) throw new Error('Failed to get filter options');
        return await response.json();
    } catch (error) {
        console.error("Error getting filter options:", error);
        return { brands: [], categories: [] };
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
