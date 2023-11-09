import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Types } from '../pages/Types';
import { Favorites } from '../pages/Favorites';
import { SinglePokemon } from '../pages/SinglePokemon';
import { SingleType } from '../pages/SingleType';
import { PageNotFound } from '../pages/PageNotFound';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/types" element={<Types />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/single-pokemon/:name" element={<SinglePokemon />} />
      <Route path="/single-type/:name" element={<SingleType />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
