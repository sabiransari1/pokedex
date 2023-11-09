import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Box, useToast } from '@chakra-ui/react';
import { FavoritesList } from '../components/FavoritesList';

export const Favorites = () => {
  const [pokemonFavorites, setPokemonFavorites] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const pokemonFavoritesx =
      JSON.parse(localStorage.getItem('pokemon-favorites')) || [];

    setPokemonFavorites(pokemonFavoritesx);
  }, []);

  const handleRemoveFavorite = (itemId) => {
    const newPokemonFavoritesx = pokemonFavorites.filter(
      (el) => el.id != itemId
    );

    localStorage.setItem(
      'pokemon-favorites',
      JSON.stringify(newPokemonFavoritesx)
    );

    setPokemonFavorites([...newPokemonFavoritesx]);
    toast({
      title: 'Favorite item deleted successfully',
      status: 'success',
      isClosable: true,
      position: 'top',
      duration: '1000',
    });
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box p={'100px 5rem 50px 5rem'}>
        <FavoritesList
          data={pokemonFavorites}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      </Box>
    </Box>
  );
};
