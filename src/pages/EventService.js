
import axios  from 'axios';


const URL = `http://localhost:${process.env.PORT || 5000}`;
const apiClient = axios.create({
    baseURL: URL
})

const userLogin = (payload) => {
    apiClient.post('/auth/login', payload)
        .then(res => apiClient.defaults.headers.common['Authorization'] = res.data);
}

const userLogout = () => {
    delete apiClient.defaults.headers.common["Authorization"];
}

export default {
    auth:{userLogin, userLogout}
}