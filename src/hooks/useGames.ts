import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Games {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Games[];
}

const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then(result => setGames(result.data.results))
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            });

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;