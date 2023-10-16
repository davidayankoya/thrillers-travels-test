import { Box } from '@chakra-ui/react'
import React from 'react'
import { Text2XL, Text3XL } from '../Text/Text'
import { ElementColor, TextColor } from '@/constants/colors'
import { Inter } from 'next/font/google'
const font = Inter({ subsets: ['latin'] })


function Logo({ fontWeight, ...props }) {
    return (
        <Box {...props}>
            <Text3XL fontWeight={800} className={font.className}>
                <Box as='span' color={ElementColor.darkBlue}>Mima</Box>
                <Box as='span' color={TextColor.gray}>Booking</Box>
            </Text3XL>
        </Box>
    )
}

export default Logo