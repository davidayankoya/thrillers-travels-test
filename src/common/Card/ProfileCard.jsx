import { ElementColor } from '@/constants/colors'
import { Avatar, Box, Center, Stack } from '@chakra-ui/react'
import React from 'react'
import { TextXL } from '../Text/Text'
import { FiEdit } from 'react-icons/fi' 
import { Nunito } from 'next/font/google';
const font = Nunito({ subsets: ['latin'] })


function ProfileCard({ user, image }) {
    return (
        <Stack dir='column' align='center' w='full' spacing={[4, 6, 6]} className={font.className}>
            <Box w='max-content' borderRadius='full' p={[1, 1, 1]} border={`1px solid ${ElementColor.darkBlue}`} pos='relative'>
                <Avatar
                    name={user.name}
                    src={user?.image_url ?? image}
                    size={['xl', 'lg', 'xl']}
                    bg={ElementColor.darkBlue}
                />
                <Center pos='absolute' top='83%' left='35%' p={[2, 2, 2]} borderRadius='full' bgColor={ElementColor.darkBlue} cursor='pointer'>
                    <FiEdit size={15} color={ElementColor.white} />
                </Center>
            </Box>

            <TextXL fontSize={['16px', '16px', '16px']} fontWeight={600}>{user.name}</TextXL>
        </Stack>    
    )
}

export default ProfileCard