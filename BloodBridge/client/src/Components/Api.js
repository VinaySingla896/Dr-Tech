import axios from "axios";

const baseURL = "https://dr-tech.onrender.com";

export default axios.create({ baseURL: baseURL });
