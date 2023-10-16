import React, { Suspense } from 'react'
import SearchHeading from './dashboard/components/SearchHeading'
import TrendingDestinations from './dashboard/components/TrendingDestinations'
import BestOffers from './dashboard/components/BestOffers'
import ExploreLocation from './dashboard/components/ExploreLocation'
import { Stack, VStack } from '@chakra-ui/react'
import { DestinationCardSk } from '@/common/Card/DestinationCard'
import { ElementColor } from '@/constants/colors'


export function Fallback() {
    return (
        <Stack direction={['column', 'column', 'row']} w='98%' spacing={3} bgColor={ElementColor.white} p={3}>
            <DestinationCardSk w='50%'/>
            <DestinationCardSk w='50%' />
        </Stack>
    )
}

export default function Home() {
    return (
        <VStack spacing={10} pt={[0, 0, 4]} pb='90px'>
            <SearchHeading />
            
            <TrendingDestinations />
            
            <BestOffers />
            
            <ExploreLocation/>
        </VStack>
    )
}
