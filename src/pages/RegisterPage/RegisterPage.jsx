import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import RegisterForm from 'components/Register/Register';

const RegisterPage = () => {
  return (
    <Box textAlign="center" maxWidth="400px" margin="0 auto">
      <Heading as="h2" size="lg" marginY="2rem">
        Register
      </Heading>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
