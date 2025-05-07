import axios from "axios";

const URL = 'http://localhost:8080/cpf'

const api = axios.create({
    baseURL: URL
})

export default api;