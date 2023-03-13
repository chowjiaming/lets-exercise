import {Link as ChakraLink, Text} from '@chakra-ui/react';
import Link from 'next/link';

export const FooterComponent: React.FC = () => {
  return (
    <Text fontSize="sm" color="subtle">
      Made with ❤️ by{' '}
      <ChakraLink
        as={Link}
        fontWeight="bold"
        href="https://www.josephchow.dev"
        isExternal
      >
        Joseph Chow
      </ChakraLink>
    </Text>
  );
};

FooterComponent.displayName = 'FooterComponent';
