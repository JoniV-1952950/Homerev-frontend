import { Routes, Route } from 'react-router-dom';
import { Variables } from '../../utils/Variables';

import Home from './StudentHome';

// render different pages based on url
const Main = () => {
return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path={Variables.HOME_URL} element={<Home/>} ></Route>
    </Routes>
  );
}

export default Main;