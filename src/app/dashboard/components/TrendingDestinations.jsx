'use client'

import { Heading } from '@/common/Text/Heading'
import { Stack } from '@chakra-ui/react'
import React, { Suspense, useMemo } from 'react'
import { trendingDestinations } from '@/constants/mock'
import DestinationCard from '@/common/Card/DestinationCard'
import ScrollCarousel from '@/common/Carousel/ScrollCarousel'


function TrendingDestinations() {
    const trending = useMemo(() => 
        trendingDestinations.map((e, index) =>
            <DestinationCard key={index} {...e} />
        )
    , [])

    return (
        <Stack w='full' spacing={3} px={[4, 4, 0]} py={2} pos='relative' overflowX='hidden'>
            <Heading text='Trending Destinations' />

            <ScrollCarousel
                items={trending}
            />
        </Stack>
    )
}

export default TrendingDestinations