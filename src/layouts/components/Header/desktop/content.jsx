import { Box, Center, HStack } from "@chakra-ui/react"
import React from "react"
import { Input } from "@/common/Form";
import { FiSearch } from 'react-icons/fi'
import { TextMd, TextSm } from '@/common/Text/Text'
import { prettyDateFormat } from '@/utils/utils'
import { IoNotificationsOutline } from 'react-icons/io5'
import { ElementColor, TextColor } from "@/constants/colors";
import moment from 'moment'
import { Nunito } from 'next/font/google';
const font = Nunito({ subsets: ['latin'] })

export function Indicator({ count }) {
    return (
        <Box pos='absolute' top={['-40%', '-40%', '-40%']} right={['70%', '70%', '-25%']} bgColor='red' borderRadius='full' px={1.5} py={1}>
            <TextSm color={TextColor.white} lineHeight={1}>{count}</TextSm>
        </Box>
    )
}

function HeaderContent() {
    const today = moment()

    return (
        <React.Fragment>
            <Input
                placeholder='Search any things ...'
                leftElement={<FiSearch color={ElementColor.lightShadow} size={18} />}
                w='30%'
            />

            <HStack spacing={4}>
                <TextMd fontSize={['13px', '14px']} fontWeight={600} className={font.className}>
                    {prettyDateFormat(today)}
                </TextMd>
                <Center
                    p={2}
                    borderRadius={10}
                    border={`1px solid ${ElementColor.lightShadow}`}
                    pos='relative'
                    cursor='pointer'
                    _hover={{ borderColor: ElementColor.blue }}
                    transition='0.2s all ease-in'
                >
                    <Indicator count={3} />
                    <IoNotificationsOutline/>
                </Center>
            </HStack>
        </React.Fragment>
    )
}

export default HeaderContent