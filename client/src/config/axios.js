import axios from "axios";

const setBaseUrl = (token) => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
};

const setToken = (token) => {
    axios.defaults.headers.common["token"] = token;
};

export { setBaseUrl };

export default setToken;
