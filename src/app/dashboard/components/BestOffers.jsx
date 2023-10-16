import { Heading } from '@/common/Text/Heading'
import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { bestOffers } from '@/constants/mock'
import PropertyCard from '@/common/Card/PropertyCard'
import { TextSm } from '@/common/Text/Text'
import { TextColor } from '@/constants/colors'


function BestOffers() {
    return (
        <VStack w='full' align='start' px={[4, 4, 0]} spacing={2} py={2}>
            <Heading text='Best Offers'>
                <TextSm pr={4} color={TextColor.blue} fontSize={['13px', '14px', '14px']} fontWeight={500} _hover={{ textDecor: 'underline' }} cursor='pointer'>
                    View All
                </TextSm>
            </Heading>
            
            <Stack direction={['row', 'row', 'row']} w='full' spacing={4} overflowX='auto' className='scroll-custom'>
                {bestOffers.map((e, index) => 
                    <PropertyCard
                        key={index}
                        {...e}
                    />
                )}
            </Stack>
        </VStack>
    )
}

export default BestOffers