import { Box } from '@chakra-ui/react';


export const AllSizes = ({ children, type, ...props }) => {
    const displayType = (type) => {
        switch (type) {
            case 'desktop': return ['none', 'none', 'none', 'initial'];
            case 'desktop-tablet': return ['none', 'none', 'initial', 'initial'];
            case 'mobile': return ['initial', 'none', 'none', 'none'];
            case 'mobile-tablet': return ['initial', 'initial', 'none', 'none'];
            default: return null
        }
    }

    return (
        <Box w='full' display={displayType(type)} {...props}>
            {children}    
        </Box>
    )
}

export const DesktopOnly = ({ children, ...props }) => <AllSizes type='desktop' {...props}>{children}</AllSizes>
export const DesktopAndTablet = ({ children, ...props }) => <AllSizes type='desktop-tablet' {...props}>{children}</AllSizes>
export const MobileOnly = ({ children, ...props }) => <AllSizes type='mobile' {...props}>{children}</AllSizes>
export const MobileAndTablet = ({ children, ...props }) => <AllSizes type='mobile-tablet' {...props}>{children}</AllSizes>