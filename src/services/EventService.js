
import axios  from 'axios';

const TOKEN_KEY = 'JWT';
const URL = `http://localhost:${process.env.PORT || 5000}`;
const apiClient = axios.create({
    baseURL: URL
})

apiClient.interceptors.request.use(function (config){
    let token = localStorage.getItem(TOKEN_KEY);
    if(token){
        config.headers.authorization = token;
    }
    return config
}, function (error) {
    return Promise.reject(error);
})

const userLogin = (payload, callback) => {
    apiClient.post('/auth/login', payload, callback)
        .then((res) => {
            localStorage.setItem(TOKEN_KEY, res.data);
            callback(true);
        }).catch(error => {
            console.log(error);
            callback(false);
    });
}

const userLogout = () => {
    delete apiClient.config.headers.authorization;
    localStorage.removeItem(TOKEN_KEY);
}

const isLogin = () => {
    if(localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}

export default {
    auth:{userLogin, userLogout, isLogin}
}