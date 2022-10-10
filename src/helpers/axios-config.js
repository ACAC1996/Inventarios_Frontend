import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:4000/'
    baseURL: 'https://inv1-backend-app.herokuapp.com/'
});

export {
    axiosInstance
}
