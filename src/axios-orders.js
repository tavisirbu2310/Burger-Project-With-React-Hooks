import axios from 'axios';

const instance=axios.create({
    baseURL:'https://my-burger-5df31.firebaseio.com/'
})

export default instance;