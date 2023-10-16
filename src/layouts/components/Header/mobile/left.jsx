'use client'

import React from "react"
import { useDisclosure, IconButton, HStack } from '@chakra-ui/react'
import { TiThMenu } from 'react-icons/ti';
import { TbMenu } from 'react-icons/tb';
import { ElementColor } from "@/constants/colors";
import LeftSidebar from "./leftSide";
import NextLink from "next/link";
import Logo from "@/common/Logo/Logo";


function HeaderLeft() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <React.Fragment>
            <HStack spacing={3}>
                <IconButton
                    variant="unstyled"
                    icon={<TbMenu size='34px' color={ElementColor.darkGray} />}
                    aria-label="open left menu"
                    onClick={onOpen}
                />
                <NextLink href="/">
                    <Logo />
                </NextLink>
            </HStack>

            <LeftSidebar
                isOpen={isOpen}
                toggleSidebar={onClose}
            />
        </React.Fragment>
    )
}

export default HeaderLeft