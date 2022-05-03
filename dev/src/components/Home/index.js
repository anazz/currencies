import { useState } from "react";
import { useEffect } from "react";
//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useDispatch, useSelector } from "react-redux";
import currencyData from "src/data/currency.json";

import CurrencyLine from "./currencyLine";
import "./styles.scss";

const Home = () => {
  //tableau ou tu récupère les devises contenues dans currency.json
  const dispatch = useDispatch();
  const [sortedCurrency, setSortedCurrency] = useState(currencyData.currencies);
  let [sortedDir, setSortedDir] = useState('up');

  //pour récupérer les propriétés du state
  const wallet = useSelector((state)=> state.buyer.wallet);
  
  const sortTab = (e) => {
    let type = e.currentTarget.getAttribute('type');
    let sorted = [...sortedCurrency].sort((a, b) => {
      if (a[type] > b[type]) return sortedDir == 'up' ? 1 : -1;
      if (a[type] < b[type]) return sortedDir == 'up' ? -1 : 1;
      return 0;
    });
    setSortedDir(sortedDir == 'up' ? 'down' : 'up');
    setSortedCurrency(sorted);
  }

  const JSXCurrency = sortedCurrency.map(element => {
    return(
      <CurrencyLine key={element.code} currency={element} />
    )
  });

  return (
    <div className="home">
      <div className="currency-tab tab">
        <div className="currency-row title">
          <div className={`cell name ${sortedDir}`} onClick={sortTab} type="name">
            Nom
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
          <div className={`cell rate ${sortedDir}`} onClick={sortTab} type="rate">
            taux en $
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
          <div className={`cell inverse-rate ${sortedDir}`} onClick={sortTab} type="inverseRate">
            taux inversé
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
          <div className="cell cta">
            Acheter
          </div>
        </div>
        {JSXCurrency}
      </div>
   </div>
  );
}

export default Home;

