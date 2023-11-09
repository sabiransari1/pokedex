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
        {/* <Heading>Type: {item.types[0].type.name}</Heading> */}
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

        <Button w={'100%'} onClick={handleRemoveFavorite}>
          Remove To Favorite
        </Button>
      </Box>
    </Flex>
  );
};
