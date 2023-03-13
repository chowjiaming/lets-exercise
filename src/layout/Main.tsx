import {Flex, type FlexProps} from '@chakra-ui/react';

export const Main: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex
      as="main"
      role="main"
      flex="1"
      align="center"
      justify="center"
      wrap="wrap"
      padding="6"
      bg="teal.100"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};
