import {Flex, type FlexProps} from '@chakra-ui/react';

export const Footer: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
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
