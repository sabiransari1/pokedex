import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex
      minW={'100Vw'}
      minH={'70px'}
      justify={'space-between'}
      align={'center'}
      p={'0rem 5rem'}
      bgColor={'wheat'}
      position={'fixed'}
      zIndex={'1'}
    >
      <Link to={'/'}>
        <Heading>Pokémon</Heading>
      </Link>

      <Link to={'/types'}>
        <Heading>Types</Heading>
      </Link>

      <Link to={'/favorites'}>
        <Heading>Favorites</Heading>
      </Link>
    </Flex>
  );
};
