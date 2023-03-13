import {Flex, type FlexProps} from '@chakra-ui/react';

export const Navbar: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="nav"
      role="navigation"
      justify="space-between"
      align="center"
      wrap="wrap"
      padding="4"
      bg="teal.500"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

Navbar.displayName = 'Navbar';
