'use client'

import Button from '@/common/Button/Button'
import { Select } from '@/common/Form'
import { ElementColor, TextColor } from '@/constants/colors'
import { Divider, Flex, Stack } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineUser } from 'react-icons/hi2'
import { PiNotepadLight } from 'react-icons/pi'
const nextFiveDays = Array(5).fill(0).map((e, index) => index === 0 ? 'Today' : moment().add(index, 'days').format('ll'))


function SearchHeading() {

    return (
        <Flex w='full' justify='center' h='190px' bgImg='assets/img/couch.jpg' bgSize='cover' bgPos='center' pos='relative' borderRadius={[0, 10, 20]} mb={['180px', '180px', '40px']}>
            <Stack
                direction={['column', 'column', 'row']}
                w={['full', 'full', '94%', '88%']}
                justify='space-between'
                px={5}
                py={4}
                pos='absolute'
                top='90%'
                bgColor={ElementColor.white}
                borderRadius={16}
                boxShadow='0px 4px 40px 0px rgba(0,0,0,0.03)'
            >
                <Select
                    leftElement={<CiLocationOn color={TextColor.fadedBlue} size={20} />}
                    placeholder='Where Are You Going?'
                    options={['France', 'London', 'USA']}
                    w={['full', 'full', '30%']}
                />
                <Divider orientation='vertical' w='2px' h='46px' bgColor={ElementColor.lightGray} display={['none', 'none', 'initial']} />
                <Select
                    leftElement={<PiNotepadLight color={TextColor.fadedBlue} size={20}/>}
                    placeholder='Check-in Date'
                    options={nextFiveDays}
                    w={['full', 'full', '30%']}
                />
                <Divider orientation='vertical' w='2px' h='46px' bgColor={ElementColor.lightGray} display={['none', 'none', 'initial']} />
                <Select
                    leftElement={<HiOutlineUser color={TextColor.fadedBlue} size={20}/>}
                    placeholder='No of occupants'
                    options={['1 adults', '2 adults', '3 adults', '4 adults', '5 adults']}
                    w={['full', 'full', '30%']}
                />
                <Button
                    text='Search'
                    bgColor={ElementColor.blue}
                    w={['full', 'full', '10%']}
                />
            </Stack>
        </Flex>
    )
}

export default SearchHeading