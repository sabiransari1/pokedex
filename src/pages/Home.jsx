import React, { useEffect, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { PokemonList } from '../components/PokemonList';

export const Home = () => {
  const [data, setData] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const fetchData = async (url, pageNo) => {
    try {
      let res = await fetch(`${url}?limit=20&offset=${pageNo}`, {
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
    fetchData(`https://pokeapi.co/api/v2/pokemon`, pageNo);
  }, [pageNo]);

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box p={'100px 5rem 1rem 5rem'}>
        {/* 1 */}
        <PokemonList data={data} />
      </Box>

      {/* 3 */}
      <Flex p={'1rem 5rem'} justify={'center'}>
        <Button
          onClick={() => setpageNo((prev) => prev - 1)}
          isDisabled={pageNo === 1}
        >
          Previous
        </Button>
        <Button isDisabled>{pageNo}</Button>
        <Button onClick={() => setpageNo((prev) => prev + 1)}>Next</Button>
      </Flex>
    </Box>
  );
};
