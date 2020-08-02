import axios from 'axios';

const api = axios.create({
    baseURL: 'http://web-app-deploy.herokuapp.com/api'
});

export default api;

