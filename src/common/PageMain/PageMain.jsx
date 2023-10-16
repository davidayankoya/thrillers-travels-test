import React from 'react';
import { Box } from '@chakra-ui/react';
import { ElementColor } from '@/constants/colors';


function Main({ children, className, fullPage }) {
    return (
        <Box
            as='main'
            w={['full', 'full', '80%']}
            mt={['85px', '85px', '0px']}
            minH={['100vh', '100vh', 'calc(100vh - 80px)']}
            maxH={['', '', '100vh']}
            pt={0}
            pb={0}
            pl={0}
            pr={0}
            bgColor={ElementColor.washedWhite}
            overflowY='auto'
            className={`${className ?? ''} scroll-custom`}
            pos='relative'
        >
            {children}
        </Box>
    )
}


function PageMainContainer ({ pageClassName, children, fullPage }) {
    return (
        <Main className={`page-main ${pageClassName ?? ''}`} fullPage={fullPage}>
            {children}
        </Main>
    )
}

export default PageMainContainer;