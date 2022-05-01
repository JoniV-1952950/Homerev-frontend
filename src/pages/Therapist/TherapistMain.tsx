import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Variables } from '../../utils/Variables';

import Home from './TherapistHome';
import Patient from './Patient';

// render different pages based on url
const Main = () => {
return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path={Variables.HOME_URL} element={<Home/>} ></Route>
      <Route path={Variables.PATIENT_URL + '*'} element={<Patient/>}></Route>
    </Routes>
  );
}

export default Main;