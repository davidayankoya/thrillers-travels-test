import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { ElementColor, TextColor } from '@/constants/colors'


function Button({
    children,
    type,
    text,
    loading,
    disabled,
    fontSize,
    radius,
    margin,
    color,
    bgColor,
    fontWeight,
    colorScheme,
    variant,
    iconType,
    ...props
}) {

    return (
        <ChakraButton
            size={props.size ?? 'sm'}
            type={type}
            isLoading={loading}
            isDisabled={disabled}
            bgColor={colorScheme ? undefined : variant === 'outline' ? 'white' : bgColor || ElementColor.pink}
            color={colorScheme ? undefined : color || TextColor.white}
            variant={variant === 'outline' ? 'solid' : undefined}
            colorScheme={colorScheme}
            borderRadius={radius || "14px"}
            margin={margin || '0px'}
            fontWeight={fontWeight || 500}
            fontSize={fontSize || '13px'}
            py={[6, 6, 6]}
            _hover={{ filter: disabled ? "" : "grayscale(30%)" }}
            transition='.3s ease-in-out'
            lineHeight={1}
            border={variant === 'outline' ? `1px solid ${color}` : props.border}
            // leftIcon={iconType ? pickIcon(iconType) : undefined}
            {...props}
        >
            {text ?? children}
        </ChakraButton>
    )
}

export default Button