import axios from "axios"

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a30d5a2f51af4830a5dda67f31776672"
    }
});