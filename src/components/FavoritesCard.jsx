import React from 'react';
import { Flex, Box, Button, Heading, Image } from '@chakra-ui/react';

export const FavoritesCard = ({ item, handleRemoveFavorite }) => {
  return (
    <Flex justify={'center'} align={'center'}>
      <Box
        p={'2rem'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        borderRadius={'5px'}
      >
        <Heading>Name: {item.name}</Heading>
        <Image src="" />
        <Heading>ID: {item.id}</Heading>
        <Heading>Base Experience: {item.base_experience}</Heading>
        <Heading>Type: {}</Heading>
        <Heading>Hp: {}</Heading>
        <Heading>Attack: {}</Heading>
        <Heading>Defense: {}</Heading>
        <Heading>Special-Attack: {}</Heading>
        <Heading>Special-Defense: {}</Heading>
        <Heading>Speed: {}</Heading>
        <Heading>Abilities: {}</Heading>
        <Heading>Moves: {}</Heading>
        <Heading>Weight: {item.weight}</Heading>
        <Heading>Height: {}</Heading>

        <Button w={'100%'} onClick={() => handleRemoveFavorite(item.id)}>
          Remove To Favorite
        </Button>
      </Box>
    </Flex>
  );
};
