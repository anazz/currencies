import { useDispatch, useSelector } from 'react-redux';
import { showBox } from "../../actions/buyer";

import axios from 'axios';
import { Route, Routes, NavLink } from "react-router-dom";
import Auth from 'src/components/Auth';
import Register from 'src/components/Auth/register';
import Home from 'src/components/Home';
import Test from 'src/components/Test';
import Dashboard from 'src/components/Dashboard';


const App = () => {
  //nécessaire pour appeler les fonction d'actionactions
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const viewBox = useSelector((state) => state.buyer.toggleBox);

  const toggleBox = () => {
    dispatch(showBox('connect-open'));
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>CURRENCY APP</h1>  
        {viewBox == 'connect-close' && <button type="button" onClick={toggleBox}>connect</button>}
        {viewBox == 'connect-open' && <Auth />}
        {viewBox == 'register-open' && <Register />}
        <NavLink 
          key="/dashboard" 
          to="/dashboard" 
        >
          <button className="dashboard-btn button">Dashboard</button>
        </NavLink>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
