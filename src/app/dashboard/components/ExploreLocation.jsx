'use client'

import { Heading } from '@/common/Text/Heading'
import { Stack } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { exploreLocations } from '@/constants/mock'
import DestinationCard from '@/common/Card/DestinationCard'
import ScrollCarousel from '@/common/Carousel/ScrollCarousel'


function ExploreLocation() {
    const locations = useMemo(() => 
        exploreLocations['france'].map((e, index) => 
            <DestinationCard key={index} {...e} />
        )
    , [])
    
    return (
        <Stack w='full' spacing={3} px={[4, 4, 0]} py={2} pos='relative' overflowX='hidden'>
            <Heading text='Explore France' />
            
            <ScrollCarousel
                items={locations}
            />
        </Stack>
    )
}

export default ExploreLocation