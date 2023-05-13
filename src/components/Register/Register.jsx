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
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    dispatch(registerThunk(newUser))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error(error));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" marginBottom="1rem">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="email" marginBottom="1rem">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" marginBottom="1rem">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="green" size="lg" width="full">
          Sign Up
        </Button>
        <Stack pt={4} align="center">
          <Text align="center">
            Already a user?
            <Link as={RouterLink} to="/login" color="green.500">
              Sign Up
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
