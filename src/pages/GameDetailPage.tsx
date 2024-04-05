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
        <>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5} paddingY={3}>
                <GridItem>
                    <Heading>{games.name}</Heading>
                    <ExpandableText>{games.description_raw}</ExpandableText>
                    <GameAttributes game={games} />
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={games.id} />
                </GridItem>
            </SimpleGrid>
            <SimpleGrid spacing={5}>
                <GameScreenshot gameId={games.id} />
            </SimpleGrid>
        </>
    );
}

export default GameDetailPage;