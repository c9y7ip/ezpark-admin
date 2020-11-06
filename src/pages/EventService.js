
import axios  from 'axios';


const URL = `http://localhost:${process.env.PORT || 5000}`;
const apiClient = axios.create({
    baseURL: URL
})

apiClient.interceptors.request.use(function (config){
    let token = localStorage.getItem("JWT");
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
            localStorage.setItem("JWT", res.data);
            callback(true);
        }).catch(error => {
            console.log(error);
            callback(false);
    });
}

const userLogout = () => {
    delete apiClient.config.headers.authorization;
    localStorage.removeItem("JWT");
}

export default {
    auth:{userLogin, userLogout}
}