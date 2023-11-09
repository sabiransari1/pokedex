import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const SingleType = () => {
  const params = useParams();
  const [singleData, setSingleData] = useState({});

  const fetchData = async (url) => {
    try {
      let res = await fetch(`${url}/${params.name}`, {
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
      <Box border={'1px solid red'} p={'100px 5rem 50px 5rem'}>
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
      </Box>
    </Box>
  );
};
