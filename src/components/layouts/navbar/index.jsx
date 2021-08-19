import React from 'react';

import {
  Flex,
  Box,
  Spacer,
  Button,
  Heading,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useAppSelector } from 'store';
import { logout } from '../../../redux/authSlice';
const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userName = useAppSelector((state) => state.auth.user?.display_name);
  const userImage = useAppSelector((state) => state.auth.user?.images[0].url);

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <Flex alignItems="center" width="100vw" bgColor="#121212">
      <Box p="4">
        <Heading as="h3" size="lg" color="#fff">
          Spotify
        </Heading>
      </Box>
      <Spacer />
      <Box p="4">
        <Button size="sm" bgColor="#1db954" color="#fff">
          <Text fontSize="sm">{userName}</Text>
          <Avatar src={userImage} size="sm" />
        </Button>
      </Box>
      <Box p="4">
        <Button
          onClick={handleLogoutClick}
          size="sm"
          bgColor="#1db954"
          color="#fff"
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
//
