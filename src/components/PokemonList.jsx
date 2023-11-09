import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ data }) => {
  return (
    <Flex flexDirection={"column"} gap={"1rem"}>
      {data.length != 0 &&
        data?.map((item, index) => <PokemonCard key={index} {...item} />)}
    </Flex>
  );
};
