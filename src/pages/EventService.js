
import axios  from 'axios';


const URL = `http://localhost:${process.env.PORT || 5000}`;
const apiClient = axios.create({
    baseURL: URL
})

const userLogin = (payload, callback) => {
    apiClient.post('/auth/login', payload, callback)
        .then((res) => {
            apiClient.defaults.headers.common['Authorization'] = res.data
            callback(true);
        }).catch(error => {
            console.log(error);
            callback(false);
    });
}

const userLogout = () => {
    delete apiClient.defaults.headers.common["Authorization"];
}

export default {
    auth:{userLogin, userLogout}
}