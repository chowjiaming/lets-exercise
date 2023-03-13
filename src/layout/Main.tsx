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
      p="6"
      {...props}
    >
      {children}
    </Flex>
  );
};
