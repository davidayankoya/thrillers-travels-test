import React from 'react'
import { Select as ChakraSelect, FormControl, FormLabel, Box, Center, Flex } from '@chakra-ui/react'
import { ElementColor, TextColor } from '@/constants/colors'
import { TextSm } from '../Text/Text'
import { allCaps } from '@/utils/utils';


export function Select ({ 
    label,
    labelStyle,
    options = [],
    displayValues,
    value,
    color,
    className,
    style,
    name,
    height,
    disabled,
    required,
    border,
    errors,
    radius,
    labelColor,
    placeholder,
    noPlaceholder,
    placeholderStyle,
    focusBorder,
    leftElement,
    custom,
    ...props
}) {
        
    return (
        <FormControl w={props.w} cursor='pointer'>
            {label &&
                <FormLabel
                    htmlFor={`${name} ${label}`}
                    color={labelColor || 'gray.600'}
                    fontSize='14px'
                    minWidth={160}
                    mb={1}
                    sx={labelStyle}
                >
                    {label}
                </FormLabel>
            }
            <Flex pos='relative' w='full'>
                {leftElement &&
                    <Center>
                        {leftElement}
                    </Center>
                }
                <ChakraSelect
                    id={`${name} ${label}`}
                    name={name}
                    fontSize='14px'
                    isDisabled={disabled}
                    isRequired={required}
                    h={height || '40px'}
                    color={color || TextColor.lightGray}
                    borderStyle='inset'
                    _focus={{ borderBottom: `1px solid ${ElementColor.blue}`, outline: 'none', boxShadow: `none` }}
                    border={(errors && errors[name]) ? "2px solid crimson" : 'none'}
                    borderRadius={radius || '0px'}
                    borderLeft={required ? '4px solid orange': '' }
                    value={value}
                    pl={leftElement ? '102px' : '12px'}
                    pr='12px'
                    sx={style}
                    cursor='pointer'
                    paddingStart='0px'
                    paddingInlineStart='0px'
                    className={className}
                    {...props}
                    w='full'
                >
                    {!noPlaceholder && <option value='' style={placeholderStyle}>{placeholder}</option>}
                    {options.map((optionValue, index) => (
                        value === optionValue ? (
                            <option key={index} value={value} style={{ color: TextColor.lightGrey }}>
                                {displayValues ? displayValues[index] : value}
                            </option>
                        ) : (
                            <option key={index} value={optionValue} style={{ color: TextColor.lightGrey }}>
                                {displayValues ? displayValues[index] : optionValue}
                            </option>
                        )
                    ))}
                </ChakraSelect>
            </Flex>

            {errors && (errors[name] &&
                <TextSm mt='6px' mb={0} color='crimson'>
                    {errors[name]}
                </TextSm>
            )}
        </FormControl>
    )
}