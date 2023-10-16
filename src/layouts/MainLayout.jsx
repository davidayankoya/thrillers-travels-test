import Container from '@/styling/container'
import { HStack } from '@chakra-ui/react'
import React from 'react'
import LeftSidebar from './components/Sidebar/left'
import PageMainContainer from '@/common/PageMain/PageMain'
import MobileHeader from './components/Header/mobile'
import DesktopHeader from './components/Header/desktop'


function MainLayout({ children }) {
    return (
        <Container>
            <MobileHeader />
            <HStack w='full' justify='center' align='start' spacing={8}>
                <LeftSidebar/>
                <PageMainContainer fullPage>
                    <DesktopHeader />
                    {children}
                </PageMainContainer>
            </HStack>
        </Container>
    )
}

export default MainLayout