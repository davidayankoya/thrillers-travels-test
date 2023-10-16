'use client'

import { Box, Center, HStack, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { TextMd, TextSm, TextLg } from '../Text/Text'
import { CiLocationOn } from 'react-icons/ci'
import { IoNotificationsOutline } from 'react-icons/io5'
import { ElementColor, TextColor } from '@/constants/colors'
import { moneyFormat } from '@/utils/utils'


function PropertyCard({ w, title, location, currency = '$', price = 0.0, image_url }) {
    return (
        <VStack
            w={w}
            minW='220px'
            align='start'
            pt={2}
            pb={5}
            px={3}
            spacing={4}
            borderRadius='xl'
            bgColor={ElementColor.white}
            cursor='pointer'
            transition='0.3s ease-out all'
            _hover={{ transform: 'translateY(-3px)', boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.05)' }}
        >
            <Image
                src={image_url}
                width='full'
                height='110px'
                alt={`destination ${location}`}
                borderRadius='xl'
            />

            <VStack w='full' align='start' spacing={3}>
                <TextMd fontWeight={700} color={TextColor.blue}>{title}</TextMd>
                <HStack spacing={2}>
                    <CiLocationOn color={ElementColor.gray} />
                    <TextSm>{location}</TextSm>
                </HStack>
            </VStack>

            <HStack w='full' justify='space-between'>
                <TextLg color={TextColor.blue} fontWeight={600}>
                    {currency}{moneyFormat(price)}<Box as='span' fontSize={['14px', '14px', '14px']} color={TextColor.lightGray} fontWeight={400}> / night</Box>
                </TextLg>

                <Center p={2} borderRadius={10} border={`1px solid ${ElementColor.lightShadow}`} cursor='pointer'>
                    <IoNotificationsOutline color={ElementColor.gray} />
                </Center>
            </HStack>

        </VStack>
    )
}

export default PropertyCard