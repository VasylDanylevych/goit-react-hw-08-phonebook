import React, { Suspense } from 'react';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

import UserMenu from 'components/UserMenu/UserMenu';

export default function Layout() {
  const token = useSelector(selectToken);

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Flex
        as="header"
        justify="space-between"
        align="center"
        padding="1rem"
        backgroundColor="purple.500"
        color="white"
      >
        <Flex>
          <ChakraLink
            as={Link}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            marginRight="1rem"
          >
            Home
          </ChakraLink>
          {token && (
            <ChakraLink
              as={Link}
              to="/contacts"
              fontSize="xl"
              fontWeight="bold"
            >
              Contacts
            </ChakraLink>
          )}
        </Flex>

        {token ? (
          <UserMenu />
        ) : (
          <Flex>
            <ChakraLink as={Link} to="/login" marginRight="1rem">
              Log In
            </ChakraLink>
            <ChakraLink as={Link} to="/register">
              Sign Up
            </ChakraLink>
          </Flex>
        )}
      </Flex>
      <Box as="main" flex="1" padding="1rem">
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
      <Box
        as="footer"
        padding="1rem"
        backgroundColor="purple.500"
        color="white"
        h={50}
      ></Box>
    </Flex>
  );
}
