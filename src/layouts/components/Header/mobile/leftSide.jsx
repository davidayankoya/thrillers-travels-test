import { VStack, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, Flex, Stack } from "@chakra-ui/react";
import { ElementColor } from "@/constants/colors";
import { PageLink } from "@/layouts/components/Sidebar/left";
import ProfileCard from "@/common/Card/ProfileCard";
import { mockUser } from "@/constants/constants";
import { navLinks } from "../../Sidebar/left";
import { PiCaretCircleRight } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import { Input } from "@/common/Form";


function Content({ toggleSidebar }) {
    return (
        <VStack w='full' h='full' pt={10} pb={8} px={6} justify='space-between' fontFamily=''>
            
            <Stack w='full' spacing={8}>
                <ProfileCard user={mockUser} />
                <Input
                    placeholder='Search for any things ...'
                    leftElement={<FiSearch color={ElementColor.lightShadow} size={18} />}
                />
            </Stack>
            
            <VStack w='full' align='start' spacing={5} fontWeight={600} pl={12}>
                {navLinks.map((e, index) =>
                    <PageLink
                        onClick={toggleSidebar}
                        key={index}
                        isActive={index === 0}
                        {...e}
                    />
                )}
            </VStack>

            <Flex w='full' pl={12}>
                <PageLink
                    title='Logout'
                    url='#'
                    icon={PiCaretCircleRight}
                />
            </Flex>

        </VStack>
    )
}


function LeftSidebar({ isOpen, toggleSidebar }) {
    return (
        <Drawer isOpen={isOpen} onClose={toggleSidebar} placement="left" w='90vw'>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bgColor={ElementColor.white} overflowY='auto' className='scroll-custom'>
                <Content
                    toggleSidebar={toggleSidebar}
                />
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default LeftSidebar;