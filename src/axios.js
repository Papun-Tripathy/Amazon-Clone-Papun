import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-15f82/us-central1/api' // The API (Cloude function) URL
});

export default instance;