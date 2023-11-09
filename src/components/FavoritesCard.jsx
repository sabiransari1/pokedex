import React, { useEffect, useState } from 'react';
import { Flex, Box, Button, Heading, Image } from '@chakra-ui/react';

export const FavoritesCard = ({ item }) => {
  const [pokemonFavorites, setPokemonFavorites] = useState([]);

  useEffect(() => {
    const pokemonFavoritesx =
      JSON.parse(localStorage.getItem('pokemon-favorites')) || [];

    setPokemonFavorites(pokemonFavoritesx);
  }, []);

  const handleRemoveFavorite = () => {
    const newPokemonFavoritesx = pokemonFavorites.filter(
      (el) => el.id != item.id
    );

    setPokemonFavorites(newPokemonFavoritesx);

    localStorage.setItem(
      'pokemon-favorites',
      JSON.stringify(newPokemonFavoritesx)
    );
  };

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
        <Heading>Type: {item.id}</Heading>
        <Heading>Hp: {item.id}</Heading>
        <Heading>Attack: {item.id}</Heading>
        <Heading>Defense: {item.id}</Heading>
        <Heading>Special-Attack: {item.id}</Heading>
        <Heading>Special-Defense: {item.id}</Heading>
        <Heading>Speed: {item.id}</Heading>
        <Heading>Abilities: {item.id}</Heading>
        <Heading>Moves: {item.id}</Heading>
        <Heading>Weight: {item.weight}</Heading>
        <Heading>Height: {item.id}</Heading>

        <Button w={'100%'} onClick={handleRemoveFavorite}>
          Remove To Favorite
        </Button>
      </Box>
    </Flex>
  );
};
