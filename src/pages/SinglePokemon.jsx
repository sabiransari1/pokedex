import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const SinglePokemon = () => {
  const params = useParams();
  const [singleData, setSingleData] = useState({});
  const [pokemonFavorites, setPokemonFavorites] = useState([]);

  const fetchData = async (url) => {
    try {
      let res = await fetch(`${url}/${params.pokemon_name}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      let datax = await res.json();

      setSingleData(datax);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon`);
  }, []);

  useEffect(() => {
    const pokemonFavoritesx =
      JSON.parse(localStorage.getItem('pokemon-favorites')) || [];

    setPokemonFavorites(pokemonFavoritesx);
  }, []);

  const handleFavorite = () => {
    const newPokemonFavoritesx = [...pokemonFavorites, singleData];
    localStorage.setItem(
      'pokemon-favorites',
      JSON.stringify(newPokemonFavoritesx)
    );
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Flex p={'100px 5rem 50px 5rem'} justify={'center'} align={'center'}>
        <Box
          p={'2rem'}
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
          borderRadius={'5px'}
        >
          <Heading>Name: {singleData.name}</Heading>
          <Image src="" />
          <Heading>ID: {singleData.id}</Heading>
          <Heading>Base Experience: {singleData.base_experience}</Heading>
          <Heading>Type: {}</Heading>
          <Heading>Hp: {}</Heading>
          <Heading>Attack: {}</Heading>
          <Heading>Defense: {}</Heading>
          <Heading>Special-Attack: {}</Heading>
          <Heading>Special-Defense: {}</Heading>
          <Heading>Speed: {}</Heading>
          <Heading>Abilities: {}</Heading>
          <Heading>Moves: {}</Heading>
          <Heading>Weight: {singleData.weight}</Heading>
          <Heading>Height: {singleData.height}</Heading>

          <Button w={'100%'} onClick={handleFavorite}>
            Add To Favorite
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
