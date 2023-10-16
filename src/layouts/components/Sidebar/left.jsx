'use client'

import React from 'react'
import { Box, Flex, HStack, useDisclosure } from '@chakra-ui/react'
import { ElementColor, TextColor } from '@/constants/colors';
import { VStack, Link } from "@chakra-ui/react";
import { DesktopOnly } from '@/styling/breakpoints';
import { RiHome4Fill, RiSettingsLine } from 'react-icons/ri'
import { LuLayoutGrid } from 'react-icons/lu'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiCaretCircleRight } from 'react-icons/pi'
import NextLink from 'next/link';
import Logo from '@/common/Logo/Logo';
import ProfileCard from '@/common/Card/ProfileCard';
import { mockUser } from '@/constants/constants'
import { TextMd } from '@/common/Text/Text';
import { Nunito } from 'next/font/google';
const transition = '0.2s all ease-in'
const font = Nunito({ subsets: ['latin'] })

export const navLinks = [
    {
        title: "Dashboard",
        url: "/",
        icon: RiHome4Fill,
    },
    {
        title: "Explore City",
        url: "#",
        icon: LuLayoutGrid,
    },
    {
        title: "Ticket",
        url: "#",
        icon: HiOutlineMail,
    },
    {
        title: "Favorites",
        url: "#",
        icon: AiOutlineHeart,
    },
    {
        title: "Setting",
        url: "#",
        icon: RiSettingsLine,
    },
]

export function PageLink({ url, icon: Icon, title, isActive, center, onClick }) {
    const { isOpen: isHover, onOpen, onClose } = useDisclosure()
    const color = (isActive || isHover) ? ElementColor.darkBlue : TextColor.lightGray


    return (
        <Link _hover={{ textDecor: 'none', color: ElementColor.lightBlue }} as={NextLink} href={url} onMouseOver={onOpen} onMouseOut={onClose}>
            <HStack w='full' justify='start' spacing={4} pos='relative' onClick={onClick} className={font.className}>
                {isActive &&
                    <Box w='5px' h='5px' borderRadius='full' bgColor={color} pos='absolute' left='-20px'></Box>
                }
                <Icon color={color} size={22} style={{ transition: transition }} />
                <TextMd fontSize={['14px', '14x', '14px']} color={color} fontWeight={600} transition={transition}>{title}</TextMd>
            </HStack>
        </Link>
    )
}

function LeftSidebar () {
    return (
        <DesktopOnly w='20%' h='100vh'>
            <Box as='nav' bgColor={ElementColor.white} px={12} w='full' overflowY='auto' className='scroll-custom'>
                <VStack w='full' minH='100vh' pt={10} pb={10} px={8} spacing={16}>
                    <NextLink href='/'>
                        <Logo />
                    </NextLink>

                    <ProfileCard user={mockUser} />

                    <VStack w='full' align='start' spacing={5} fontWeight={600} pl={4}>
                        {navLinks.map((e, index) =>
                            <PageLink
                                key={index}
                                isActive={index === 0}
                                {...e}
                            />
                        )}
                    </VStack>

                    <Flex w='full' pl={4}>
                        <PageLink
                            title='Logout'
                            url='#'
                            icon={PiCaretCircleRight}
                        />
                    </Flex>

                </VStack>
            </Box>
        </DesktopOnly>
    )
}

export default LeftSidebar