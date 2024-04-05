import { Card, CardBody, HStack, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Games } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Games
}

const GameCard = ({ game }: Props) => {

    return (
        <LinkBox>
            <LinkOverlay href={'games/' + game.slug}>
                <Card>
                    <Image alt={game.name} src={getCroppedImageUrl(game.background_image)} />
                    <CardBody>
                        <HStack justifyContent='space-between' marginBottom={3}>
                            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                            <CriticScore score={game.metacritic} />
                        </HStack>
                        <Heading fontSize={"2x1"}>
                            <Text>{game.name}</Text>
                            <Emoji rating={game.rating_top} /></Heading>
                    </CardBody>
                </Card>
            </LinkOverlay>
        </LinkBox>
    )
}

export default GameCard;