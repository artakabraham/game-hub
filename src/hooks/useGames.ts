import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Games>('/games');

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Games>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        })
    })

export default useGames;