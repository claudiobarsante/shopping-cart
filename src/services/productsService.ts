import apiClient from './../api/client';

export const getAllProducts = () =>
  apiClient({
    method: 'GET',
    url: '/products',
  });
