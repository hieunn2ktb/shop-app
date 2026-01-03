const API_URL = '/api/auth';

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
};

export const register = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        const errorData = await response.text(); // Or .json() depending on backend error format
        // Backend returns generic error page or simple string?
        // Let's assume it returns a string or JSON. Try to parse JSON first.
        try {
            const jsonError = JSON.parse(errorData);
            throw new Error(jsonError.message || jsonError.error || 'Registration failed');
        } catch (e) {
            // If not JSON, it might be a plain string from RuntimeException
            throw new Error(errorData || 'Registration failed');
        }
    }
    return await response.json();
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
