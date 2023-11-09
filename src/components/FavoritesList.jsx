import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { FavoritesCard } from './FavoritesCard';

export const FavoritesList = ({ data }) => {
  return (
    <Flex flexDirection={'column'} gap={'1rem'}>
      {data.length != 0 &&
        data?.map((item, index) => <FavoritesCard key={index} {...item} />)}
    </Flex>
  );
};
