'use client'

import { ElementColor } from '@/constants/colors'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { DotLoader } from 'react-spinners'


function Loader() {
    return (
        <Box
            w='100vw'
            h='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='fixed'
            backgroundColor='#fff'
            top={0}
            left={0}
            zIndex='3000'
        >
            <DotLoader
                size={44}
                color={ElementColor.blue}
            />
        </Box>
    )

}

export default Loader