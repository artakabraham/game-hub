import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
    gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenShots(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={3}>
            {data?.results.map(file =>
                <Image key={file.id} src={file.image} />)}
        </SimpleGrid>
    )


}

export default GameScreenshot