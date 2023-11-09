import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { FavoritesList } from '../components/FavoritesList';

export const Favorites = () => {
  const [pokemonFavorites, setPokemonFavorites] = useState([]);

  useEffect(() => {
    const pokemonFavoritesx =
      JSON.parse(localStorage.getItem('pokemon-favorites')) || [];

    setPokemonFavorites(pokemonFavoritesx);
  }, []);

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box border={'1px solid red'} p={'100px 5rem 50px 5rem'}>
        <FavoritesList data={pokemonFavorites} />
      </Box>
    </Box>
  );
};
