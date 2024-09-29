import axios from 'axios';

const APL_URL = 'http://localhost:5000/api/auth/';


const login = async (username, password) => {
    const { data } = await axios.post(APL_URL + 'login', { username, password});
    return data;
};


export default { login };