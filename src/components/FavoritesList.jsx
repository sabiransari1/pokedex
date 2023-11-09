import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FavoritesCard } from './FavoritesCard';

export const FavoritesList = ({ data, handleRemoveFavorite }) => {
  return (
    <Flex flexDirection={'column'} gap={'1rem'}>
      {data.length != 0 &&
        data?.map((item, index) => (
          <FavoritesCard
            key={index}
            item={item}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
    </Flex>
  );
};
