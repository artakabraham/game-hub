import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a30d5a2f51af4830a5dda67f31776672"
    }
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (config: AxiosRequestConfig) => {
        const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
        return res.data;
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
            .then(res => res.data);
    }
}

export default APIClient;