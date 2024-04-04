import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshots";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: games, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;
    if (error || !games) throw error;

    return (
        <>
            <Heading>{games.name}</Heading>
            <ExpandableText>{games.description_raw}</ExpandableText>
            <GameAttributes game={games} />
            <GameTrailer gameId={games.id} />
            <GameScreenshot gameId={games.id} />
        </>
    )
}

export default GameDetailPage;