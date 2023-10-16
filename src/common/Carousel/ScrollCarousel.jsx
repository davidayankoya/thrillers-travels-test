import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { IconButton } from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ElementColor } from '@/constants/colors'
const responsiveCaro = {
    0: { items: 1,},
    990: { items: 2,},
    1400: { items: 2,},
}

function ScrollCarousel({ items = [], responsive = responsiveCaro, infinite = false }) {
    return (
        <AliceCarousel
            mouseTracking
            keyboardNavigation
            // disableDotsControls
            autoWidth
            items={items}
            infinite={infinite}
            autoPlay={false}
            autoPlayInterval={4000}
            paddingRight={30}
            responsive={responsive}
            renderPrevButton={({ isDisabled }) =>
                <IconButton
                    aria-label="previous"
                    icon={<BsChevronLeft size={16} color={isDisabled ? ElementColor.darkBlue : 'white'} />}
                    variant="outline"
                    size='sm'
                    borderRadius={10}
                    bgColor={isDisabled ? 'white' : ElementColor.darkBlue}
                    _hover={{ bgColor: isDisabled ? 'white' : ElementColor.darkBlue }}
                    borderColor={ElementColor.blue}
                />
            }
            renderNextButton={({ isDisabled }) =>
                <IconButton
                    aria-label="next"
                    icon={<BsChevronRight size={16} color={isDisabled ? ElementColor.darkBlue : 'white'} />}
                    variant="outline"
                    size='sm'
                    borderRadius={10}
                    bgColor={isDisabled ? 'white' : ElementColor.darkBlue}
                    _hover={{ bgColor: isDisabled ? 'white' : ElementColor.darkBlue }}
                    borderColor={ElementColor.blue}
                />
            }
        />
    )
}

export default ScrollCarousel