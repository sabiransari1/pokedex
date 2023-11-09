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
        <Box p={'2rem'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} borderRadius={"5px"}>
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
    </Box>
  );
};

// abilities
// :
// (2) [{…}, {…}]
// base_experience
// :
// 64
// forms
// :
// [{…}]
// game_indices
// :
// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height
// :
// 7
// held_items
// :
// []
// id
// :
// 1
// is_default
// :
// true
// location_area_encounters
// :
// "https://pokeapi.co/api/v2/pokemon/1/encounters"
// moves
// :
// (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name
// :
// "bulbasaur"
// order
// :
// 1
// past_abilities
// :
// []
// past_types
// :
// []
// species
// :
// {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/'}
// sprites
// :
// {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', …}
// stats
// :
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types
// :
// (2) [{…}, {…}]
// weight
// :
// 69
