import { HStack, Center } from '@chakra-ui/react'
import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import { ElementColor } from '@/constants/colors'
import { TextMd } from '@/common/Text/Text'
import { prettyDateFormat } from '@/utils/utils'
import moment from 'moment'
import { Indicator } from '../desktop/content'
import { Nunito } from 'next/font/google';
const font = Nunito({ subsets: ['latin'] })

function HeaderRight() {
    const today = moment()

    return (
        <HStack w='max-content' maxW='40%' spacing={6}>
            <TextMd fontSize={['13px', '14px']} fontWeight={600} className={font.className} clip>
                {prettyDateFormat(today, true)}
            </TextMd>
            <Center
                p={2}
                borderRadius={10}
                pos='relative'
                cursor='pointer'
                border={`1px solid ${ElementColor.lightShadow}`}
                _hover={{ borderColor: ElementColor.blue }}
                transition='0.2s all ease-in'
            >
                <Indicator count={3} />
                <IoNotificationsOutline/>
            </Center>
        </HStack>
    )
}

export default HeaderRight