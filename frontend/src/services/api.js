const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const checkBackendStatus = async (timeout = 5000) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(`${API_URL}/`, { signal: controller.signal });
        clearTimeout(timer);
        if (!response.ok) throw new Error('Backend not reachable');
        return await response.json();
    } catch (error) {
        console.error('Error checking backend status:', error);
        throw error;
    }
};