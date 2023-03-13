import {Flex, type FlexProps} from '@chakra-ui/react';
import {Navbar} from '@/layout/Navbar';
import {Main} from '@/layout/Main';
import {Footer} from '@/layout/Footer';

export const Layout: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex role="application" direction="column" minH="100vh" {...props}>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
};

Layout.displayName = 'Layout';
