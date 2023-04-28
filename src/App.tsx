import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Map } from './pages/map';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Map />}>
        <Route path='/bus/:id' element={<Map />} />
      </Route>
    </Routes>
  );
}

export default App;
