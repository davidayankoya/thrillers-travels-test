'use client'

import { ElementColor, TextColor } from '@/constants/colors'
import { Flex, HStack, Skeleton, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { TextLg, TextSm } from '../Text/Text'
import { TbStarFilled } from 'react-icons/tb'
import { moneyFormat } from '@/utils/utils'
import Image from '../Image/Image'
import ImageSk from '../Skeleton/ImageSk'

export function DestinationCardSk({ w }) {
    return (
        <Skeleton
            h='100px'
            w={w}
            borderRadius='md'
            border='1px solid red'
            mb={2}
            startColor='white.600'
            endColor='gray.200'
        />
    )
}

function DestinationCard({ w, location, description, currency = '$', price = 0.0, rating = 3.5, image_url }) {
    return (
        <HStack
            w={['full', 'full', 'max-content']}
            py={4}
            pl={[2, 2, 3]}
            pr={5}
            spacing={[4, 4, 3]}
            borderRadius='xl'
            bgColor={ElementColor.white}
            cursor='pointer'
            transition='0.3s ease-out all'
            _hover={{ transform: 'translateY(-3px)', boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.05)' }}
        >
            <Image
                src={image_url}
                width={140}
                height={120}
                w={['32%', 120, 140]}
                alt={`destination ${location}`}
                borderRadius='xl'
                fallback={<ImageSk/>}
            />

            <Stack w={['68%', '68%', '']} h='full' align='start' justify='space-between' spacing={4} py={3} mr={4}>
                <Flex w='full' justify='space-between'>
                    <TextLg fontWeight={700} color={TextColor.blue}>{location}</TextLg>
                    <HStack>
                        <TbStarFilled color={ElementColor.gold} /><TextSm lineHeight={1} fontWeight={500} color={TextColor.blue}>{rating}/5</TextSm>
                    </HStack>
                </Flex>

                <Flex w={['90%', '90%', '90%']} flexWrap='wrap' overflowX='hidden'>
                    <TextSm clip>{description}</TextSm>
                </Flex>

                <TextLg color={TextColor.blue} fontWeight={600}>{currency}{moneyFormat(price)}</TextLg>
            </Stack>
        </HStack>
    )
}

export default DestinationCard