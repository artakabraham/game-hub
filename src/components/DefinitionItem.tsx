import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";


interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY={5} fontSize='md' color='gray.600'>
            <Heading as='dt'>{term}</Heading>
            <dd>{children}</dd>
        </Box>
    )
}

export default DefinitionItem;