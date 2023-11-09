import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { PokemonTypeCard } from './PokemonTypeCard';

export const PokemonTypeList = ({ data }) => {
  return (
    <Flex flexDirection={'column'} gap={'1rem'}>
      {data.length != 0 &&
        data?.map((item, index) => <PokemonTypeCard key={index} {...item} />)}
    </Flex>
  );
};
