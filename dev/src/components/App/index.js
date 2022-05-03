import { Route, Routes, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


import { showBox } from "../../actions/buyer";
import Auth from 'src/components/Auth';
import Register from 'src/components/Auth/register';
import Home from 'src/components/Home';
import Test from 'src/components/Test';
import Dashboard from 'src/components/Dashboard';


const App = () => {
  //nécessaire pour appeler les fonction d'actionactions
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const { wallet, toggleBox } = useSelector((state) => state.buyer);

  const viewBox = () => {
    dispatch(showBox('connect-open'));
  }

 let amount = 0;
  wallet.forEach(element => {
    console.log('element', element);
    console.log('calc', element.inverseRate * element.quantity);
    amount = amount + (element.inverseRate * element.quantity);
    console.log('amount', amount);
  });
  
  return (
    <div className="app">
      <header className="App-header">
        <h1>CURRENCY APP</h1>  
        {toggleBox == 'connect-close' && <button type="button" onClick={viewBox}>connect</button>}
        {toggleBox == 'connect-open' && <Auth />}
        {toggleBox == 'register-open' && <Register />}
        <NavLink 
          key="/dashboard" 
          to="/dashboard" 
        >
          <button className="dashboard-btn button">Dashboard</button>
          <div>Achat: {Math.round(amount * 100) / 100}</div>
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
