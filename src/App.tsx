import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home/home.component';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
