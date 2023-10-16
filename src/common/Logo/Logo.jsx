import { Box } from '@chakra-ui/react'
import React from 'react'
import { Text2XL } from '../Text/Text'
import { TextColor } from '@/constants/colors'


function Logo({ fontWeight, ...props }) {
    return (
        <Box {...props}>
            <Text2XL fontWeight={700}>
                <Box as='span' color={TextColor.blue}>Mima</Box>
                <Box as='span' color={TextColor.gray}>Booking</Box>
            </Text2XL>
        </Box>
    )
}

export default Logo