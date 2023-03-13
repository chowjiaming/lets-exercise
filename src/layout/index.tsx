import {Flex, type FlexProps} from '@chakra-ui/react';
import {Navbar} from '@/layout/Navbar';
import {Main} from '@/layout/Main';
import {Footer} from '@/layout/Footer';
import {FooterComponent} from '@/components/footer';
import {NavbarComponent} from '@/components/navbar';

export const Layout: React.FC<FlexProps> = ({children, ...props}) => {
  return (
    <Flex role="application" direction="column" minH="100vh" {...props}>
      <Navbar>
        <NavbarComponent />
      </Navbar>
      <Main>{children}</Main>
      <Footer>
        <FooterComponent />
      </Footer>
    </Flex>
  );
};

Layout.displayName = 'Layout';
