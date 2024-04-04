import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
        <SimpleGrid columns={{ base: 1, ms: 2 }} spacing={5}>
            <GridItem>
                <Heading>{games.name}</Heading>
                <ExpandableText>{games.description_raw}</ExpandableText>
                <GameAttributes game={games} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={games.id} />
                <GameScreenshot gameId={games.id} />
            </GridItem>
        </SimpleGrid>
    );
}

export default GameDetailPage;