import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(selectUserEmail);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <Flex>
      <Box marginRight="1rem"> {email}</Box>
      <ChakraLink as={Link} to="/" onClick={handleLogOut}>
        Log Out
      </ChakraLink>
    </Flex>
  );
}
