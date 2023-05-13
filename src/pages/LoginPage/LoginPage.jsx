import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import LoginForm from 'components/Login/Login';

const LoginPage = () => {
  return (
    <Box textAlign="center" maxWidth="400px" margin="0 auto">
      <Heading as="h1" size="xl" marginY="2rem">
        Log In
      </Heading>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
