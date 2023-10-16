import { TextColor } from "@/constants/colors"
import { Text2XL, TextXL } from './Text'
import { HStack } from "@chakra-ui/react"


export function Heading({
    text,
    children,
    ...props
}) {
    return (
        <HStack justify='space-between' w='full'>
            <Text2XL as='h3' fontWeight={props.fontWeight ?? 600} color={props.color ?? TextColor.blue} {...props}>
                {text}
            </Text2XL>
            <HStack>{children}</HStack>
        </HStack>
    )
}