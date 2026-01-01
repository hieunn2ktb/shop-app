import { getCurrentUser } from './authService';

const API_URL = 'http://localhost:8080/api/cart';

const getAuthHeaders = () => {
    const user = getCurrentUser();
    if (user && user.token) {
        return {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        };
    }
    return {};
};

export const getCart = async () => {
    const headers = getAuthHeaders();
    if (!headers.Authorization) return null; // Not logged in

    const response = await fetch(API_URL, { headers });
    if (!response.ok) return null;
    return await response.json();
};

export const addToCart = async (productId, quantity = 1) => {
    const headers = getAuthHeaders();
    if (!headers.Authorization) {
        throw new Error("Vui lòng đăng nhập để mua hàng!");
    }

    const response = await fetch(`${API_URL}/add`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ productId, quantity })
    });

    if (!response.ok) throw new Error('Failed to add to cart');
    return await response.json();
};

export const removeFromCart = async (itemId) => {
    const headers = getAuthHeaders();
    const response = await fetch(`${API_URL}/${itemId}`, {
        method: 'DELETE',
        headers
    });

    if (!response.ok) throw new Error('Failed to remove item');
    return await response.json();
};
