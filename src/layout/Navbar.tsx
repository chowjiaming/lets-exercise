import {Flex, type FlexProps} from '@chakra-ui/react';

export const Navbar: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="nav"
      role="navigation"
      justify="space-between"
      align="center"
      wrap="wrap"
      py="4"
      px="8"
      {...props}
    >
      {children}
    </Flex>
  );
};

Navbar.displayName = 'Navbar';
