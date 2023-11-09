import React from 'react';
import { Flex, Box, Button, Heading, Image } from '@chakra-ui/react';

export const FavoritesCard = ({ singleData }) => {
  return (
    <Flex p={'100px 5rem 50px 5rem'} justify={'center'} align={'center'}>
      <Box p={'1rem'} box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Heading>Name: {singleData.name}</Heading>
        <Image src="" />
        <Heading>ID: {singleData.id}</Heading>
        <Heading>Base Experience: {singleData.base_experience}</Heading>
        <Heading>Type: {singleData.id}</Heading>
        <Heading>Hp: {singleData.id}</Heading>
        <Heading>Attack: {singleData.id}</Heading>
        <Heading>Defense: {singleData.id}</Heading>
        <Heading>Special-Attack: {singleData.id}</Heading>
        <Heading>Special-Defense: {singleData.id}</Heading>
        <Heading>Speed: {singleData.id}</Heading>
        <Heading>Abilities: {singleData.id}</Heading>
        <Heading>Moves: {singleData.id}</Heading>
        <Heading>Weight: {singleData.weight}</Heading>
        <Heading>Height: {singleData.id}</Heading>

        <Button w={'100%'} onClick={handleFavorite}>
          Add To Favorite
        </Button>
      </Box>
    </Flex>
  );
};
