import {Flex, type FlexProps} from '@chakra-ui/react';

export const Footer: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      justify="center"
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
