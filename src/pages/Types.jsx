import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { PokemonTypeList } from '../components/PokemonTypeList';

export const Types = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      let res = await fetch(`${url}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      let datax = await res.json();

      setData(datax.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/type`);
  }, []);

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box p={'100px 5rem 50px 5rem'}>
        <PokemonTypeList data={data} />
      </Box>
    </Box>
  );
};
