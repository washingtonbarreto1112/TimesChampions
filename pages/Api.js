import axios  from "axios";


const Api = axios.create({
    baseURL: "http://10.133.47.24:3000"
});

export default Api