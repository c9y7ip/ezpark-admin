import axios from 'axios';

const TOKEN_KEY = 'JWT';

// const URL = `http://34.67.193.145:${process.env.PORT || 5000}`;
const URL = `http://localhost:${process.env.PORT || 5000}`;
const apiClient = axios.create({
    baseURL: URL
})

apiClient.interceptors.request.use(function (config) {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        config.headers.authorization = token;
    }
    return config
}, function (error) {
    return Promise.reject(error);
})

const userLogin = (payload, callback) => {
    apiClient.post('/auth/login', payload, callback)
        .then((res) => {
            localStorage.setItem(TOKEN_KEY, res.data.token);
            callback(true, res.data.name);
        }).catch(error => {
            console.log(error);
            callback(false);
        });
}

const userLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}

const getOneUser = (payload, callback) => {
    apiClient.post(
        '/auth/getOneUser', payload, callback)
        .then((res) => {
            callback(res.data)
        })
        .catch(e => {
            console.log(e);
        });
}

const getOneLot = (payload, callback) => {
    apiClient.post(
        '/parking/getOneLot', payload, callback)
        .then((res) => {
            callback(res.data)
        })
        .catch(e => {
            console.log(e);
        });
}


export default {
    auth: { userLogin, userLogout, isLogin },
    apiClient, getOneUser, getOneLot
}