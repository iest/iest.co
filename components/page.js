import Link from 'next/link';
import { Provider, Flex, Box, NavLink } from 'rebass';

import Logo from 'components/logo';
import theme from '../theme';

const Header = () => (
  <Box is="header" px={[3, 4, 5]} py={3}>
    <Flex is="nav" justify="center" align="center">
      <Link href="/">
        <NavLink color="cyan5" href="/">
          <Logo style={{ height: 18 }} />
        </NavLink>
      </Link>
        <NavLink color="cyan4" href="https://dribbble.com/iest">
          Github
        </NavLink>
        <NavLink color="cyan4" href="https://twitter.com/_iest">
          Twitter
        </NavLink>
    </Flex>
  </Box>
);

export default ({ children }) => (
  <Provider theme={theme}>
    <style global jsx>
      {`
        * { box-sizing: border-box; }
        html, body {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          margin: 0;
        }
      `}
    </style>

    <Header />

    {children}
  </Provider>
);
