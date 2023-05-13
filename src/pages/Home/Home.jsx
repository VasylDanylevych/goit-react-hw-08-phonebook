import React from 'react';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const token = useSelector(selectToken);

  return (
    <Box textAlign="center" py={8}>
      {token ? (
        <>
          <img src="/path/to/your/image.jpg" alt="Книга контактів" />

          <Heading as="h1" size="xl" my={4}>
            Phone book
          </Heading>

          <Text fontSize="lg" my={4}>
            Create your own contact book now!
          </Text>

          <Button as={Link} to="/contacts" colorScheme="blue" size="lg">
            Go to the contact book
          </Button>
        </>
      ) : (
        <>
          <Heading as="h1" size="xl" marginY="2rem">
            Phone book
          </Heading>
          <Text w={550} margin="0 auto" fontSize="xl" marginY="2rem">
            This application will allow you to create your own phone book so you
            don't lose contact.
          </Text>
          <Button
            as={Link}
            to="/login"
            colorScheme="blue"
            size="lg"
            marginRight="1rem"
          >
            Log In
          </Button>
          <Button as={Link} to="/contacts" colorScheme="green" size="lg">
            Sign Up
          </Button>
        </>
      )}
    </Box>
  );
};

export default HomePage;
