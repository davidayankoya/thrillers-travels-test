import { DesktopOnly } from "@/styling/breakpoints";
import { ElementColor } from "@/constants/colors";
import { Flex } from "@chakra-ui/react";
import HeaderContent from "./content";


function HeaderWrapper({ children }) {
    return (
        <Flex
            w='full'
            h='80px'
            justify='space-between'
            position='sticky'
            top='0px'
            p='16px 30px 16px 30px'
            align='center'
            bgColor={ElementColor.white}
            zIndex={2}
            borderRadius={14}
            borderTopStartRadius={0}
            borderTopEndRadius={0}
            // boxShadow={`0px 1px 25px ${ElementColor.lightGray }`}
        >
            {children}
        </Flex>
    )
}

function DesktopHeader() {
    return (
        <DesktopOnly>
            <HeaderWrapper>
                <HeaderContent />
            </HeaderWrapper>
        </DesktopOnly>
    )
}

export default DesktopHeader
  