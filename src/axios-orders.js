import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-a-burger-5b76e.firebaseio.com/'
});

export default instance;
