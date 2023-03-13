import {Flex, type FlexProps} from '@chakra-ui/react';

export const Navbar: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="nav"
      role="navigation"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="teal.500"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

Navbar.displayName = 'Navbar';
