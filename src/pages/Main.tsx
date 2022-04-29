import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Patient from './Patient';

// render different pages based on url
const Main = () => {
return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/patient/*' element={<Patient/>}></Route>
    </Routes>
  );
}

export default Main;