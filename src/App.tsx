import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './routes/main/main.component';
import SingleMode from './routes/single-mode/single-mode.component';
import MultiMode from './routes/multi-mode/multi-mode.component';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/single" element={<SingleMode />} />
      <Route path="/multi" element={<MultiMode />} />
    </Routes>
  );
}
