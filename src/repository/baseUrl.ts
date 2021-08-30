import axios from "axios";
export const exampleApi = axios.create({
    baseURL: "www.example.com.br",
    headers: {
        Authorization: "Bearer 0000-0000-0000-0000",
    },
});