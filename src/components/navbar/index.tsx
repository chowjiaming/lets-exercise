import {Box, Button, Heading} from '@chakra-ui/react';
import Image from 'next/image';

export const NavbarComponent: React.FC = () => {
  return (
    <>
      <Box
        maxW={{
          base: '8',
          md: '10',
          xl: '12',
        }}
      >
        <Image src="/logo.png" alt="Logo" width={512} height={512} />
      </Box>
      <Heading
        as="h1"
        size={{
          base: 'md',
          sm: 'md',
          md: 'lg',
          xl: 'xl',
        }}
      >
        Let&apos;s Exercise
      </Heading>
      <Button colorScheme="twitter">Dummy</Button>
    </>
  );
};

NavbarComponent.displayName = 'NavbarComponent';
