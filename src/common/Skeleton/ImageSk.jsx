import { Skeleton } from '@chakra-ui/react'
import React from 'react'

function ImageSk() {
    return (
        <Skeleton
            h='140px'
            w={['90px', '120px', '140px']}
            borderRadius='md'
            mb={2}
            startColor='white.600'
            endColor='gray.300'
        />
    )
}

export default ImageSk