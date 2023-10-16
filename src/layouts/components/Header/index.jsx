import { Box } from "@chakra-ui/react";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";


const HeaderWrapper = ({ children }) => (
    <Box w='full' as='header' pos='relative' zIndex={3}>
        {children}
    </Box>
)

function Header({ 
}) {
    return (
        <HeaderWrapper>
            <MobileHeader />
            <DesktopHeader />
        </HeaderWrapper>
    )
}

export default Header