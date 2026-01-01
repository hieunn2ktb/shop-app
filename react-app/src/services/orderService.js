import { getCurrentUser } from './authService';

const API_URL = 'http://localhost:8080/api/orders';

const getAuthHeaders = () => {
    const user = getCurrentUser();
    if (user && user.token) {
        return {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        };
    }
    return {
        'Content-Type': 'application/json'
    };
};

export const checkout = async (checkoutData) => {
    const headers = getAuthHeaders();
    if (!headers.Authorization) {
        throw new Error("Vui lòng đăng nhập để thanh toán!");
    }

    const response = await fetch(`${API_URL}/checkout`, {
        method: 'POST',
        headers,
        body: JSON.stringify(checkoutData)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Thanh toán thất bại');
    }

    return await response.json();
};
