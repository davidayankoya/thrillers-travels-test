import { Skeleton } from '@chakra-ui/react'
import React from 'react'

function ImageSk() {
    return (
        <Skeleton
            key={index}
            h='60px'
            borderRadius='md'
            mb={2}
            startColor='white.600'
            endColor='gray.50'
        />
    )
}

export default ImageSk