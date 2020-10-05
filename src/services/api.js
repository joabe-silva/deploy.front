import axios from 'axios';

const api = axios.create({
    baseURL: 'https://web-app-deploy.herokuapp.com/api'
});

export default api;

