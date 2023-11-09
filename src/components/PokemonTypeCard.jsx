import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PokemonTypeCard = ({ name, url }) => {
  return (
    <Link to={`/type/${name}`}>
      <Box
        border={'1px solid gray'}
        p={'1rem'}
        borderRadius={'5px'}
        box-shadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        <Heading>{name}</Heading>
      </Box>
    </Link>
  );
};
