import { Container as ChakraContainer } from "@chakra-ui/react"


function Container({ children }) {
    return (
        <ChakraContainer maxW={['full', 'full', 'full', '1600px']} mx='auto' px={0}>
            {children}
        </ChakraContainer>
    )
}

export default Container