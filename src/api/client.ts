import axios from 'axios';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

const apiClient = axios.create({
  baseURL: `${apiEndPoint}`,
});

export default apiClient;
