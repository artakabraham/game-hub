import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Games } from "./useGames";

const apiClient = new APIClient<Games>('/games');

const useGames = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useGames;