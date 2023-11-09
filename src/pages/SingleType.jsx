import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Image, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const SingleType = () => {
  const params = useParams();
  const [singleData, setSingleData] = useState({});

  const fetchData = async (url) => {
    try {
      let res = await fetch(`${url}/${params.types_id}`, {
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
    fetchData(`https://pokeapi.co/api/v2/type`);
  }, []);

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
          <Heading>ID: {}</Heading>
          <Heading>Base Experience: {}</Heading>
          <Heading>Type: {}</Heading>
          <Heading>Hp: {}</Heading>
          <Heading>Attack: {}</Heading>
          <Heading>Defense: {}</Heading>
          <Heading>Special-Attack: {}</Heading>
          <Heading>Special-Defense: {}</Heading>
          <Heading>Speed: {}</Heading>
          <Heading>Abilities: {}</Heading>
          <Heading>Moves: {}</Heading>
          <Heading>Weight: {}</Heading>
          <Heading>Height: {}</Heading>
        </Box>
      </Flex>
    </Box>
  );
};
