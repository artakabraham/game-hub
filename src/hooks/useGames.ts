import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
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

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Games>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    }
                })
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
    })

export default useGames;