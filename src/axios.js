import axios from "axios";
export  const baseURL ="https://api.themoviedb.org/3";
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

export default instance;
