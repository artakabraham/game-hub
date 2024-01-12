import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a30d5a2f51af4830a5dda67f31776672"
    }
});