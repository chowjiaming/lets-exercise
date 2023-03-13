import {Box} from '@chakra-ui/react';
import Image from 'next/image';
import {ColorModeToggle} from '@/components/navbar/ColorModeToggle';

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
      <ColorModeToggle />
    </>
  );
};

NavbarComponent.displayName = 'NavbarComponent';
