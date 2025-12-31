const API_BASE_URL = 'http://localhost:8080/api/home';

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
