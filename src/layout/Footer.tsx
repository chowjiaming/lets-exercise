import {Flex, type FlexProps} from '@chakra-ui/react';

export const Footer: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      justify="center"
      wrap="wrap"
      p="4"
      {...props}
    >
      {children}
    </Flex>
  );
};
