import { InputGroup, InputLeftElement, Input as ChakraInput, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { ElementColor, TextColor } from '@/constants/colors'
import { TextSm } from '../Text/Text'


export function Input ({
    label,
    name,
    value,
    onChange,
    min,
    max,
    placeholder,
    placeholderStyle,
    className,
    type,
    leftElement,
    rightElement,
    onRightElementClick,
    rightElementColor,
    required,
    disabled,
    readOnly,
    border,
    focusBorder,
    radius,
    style,
    errors,
    labelStyle,
    labelColor,
    bgColor,
    color,
    custom,
    decimal,
    ...props
}) {

    return (
        <FormControl w={props.w} cursor='pointer'>
            {label &&
                <FormLabel
                    htmlFor={`${name} ${label}`}
                    color={labelColor || TextColor.black}
                    fontSize='13px'
                    mb='6px'
                    sx={labelStyle}
                >
                    {label}
                </FormLabel>
            }
            <InputGroup>
                {leftElement &&
                    <InputLeftElement
                        left={1}
                        top={0}
                        cursor='pointer'
                    >
                        {leftElement}
                    </InputLeftElement>
                }
                <ChakraInput
                    id={`${name} ${label}`}
                    name={name}
                    onChange={onChange}
                    value={value}
                    isDisabled={disabled}
                    isRequired={required}
                    isReadOnly={readOnly}
                    type={type}
                    size='md'
                    fontSize='16px'
                    color={color || TextColor.gray}
                    pl={leftElement ? '42px' : '12px'}
                    pr={rightElement ? '42px' : '12px'}
                    py={5}
                    h={props.h || '40px'}
                    borderStyle='inset'
                    _focus={{ borderBottom: focusBorder || `1px solid ${ElementColor.fadedBlue}` }}
                    placeholder={type === 'password' ? '.........' : placeholder}
                    _placeholder={props._placeholder || { color: TextColor.grey, fontSize: "13px" }}
                    border={(errors && errors[name]) ? "2px solid crimson": border || `1px solid ${ElementColor.lightGray}`}
                    borderRadius={radius || '10px'}
                    sx={style}
                    cursor='pointer'
                    {...props}
                    w='full'
                />
            </InputGroup>

            {errors && (errors[name] &&
                <TextSm mt='6px' mb={0} color='crimson'>
                    {errors[name]}
                </TextSm>
            )}
        </FormControl>
    )
}