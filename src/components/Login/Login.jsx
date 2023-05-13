import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(logInThunk(user))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error(error));
    setEmail('');
    setPassword('');
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" marginBottom="1rem">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Введіть ваш email"
          />
        </FormControl>
        <FormControl id="password" marginBottom="1rem">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Введіть ваш пароль"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="full">
          Log In
        </Button>
        <Stack pt={4} align="center">
          <Text align="center">
            Not a user yet?
            <Link as={RouterLink} to="/register" color="blue.500">
              Sign Up
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
