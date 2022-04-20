//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useDispatch, useSelector } from "react-redux";
import currencyData from "src/data/currency.json";

import CurrencyLine from "./currencyLine";
import "./styles.scss";

const Home = () => {
  //tableau ou tu récupère les devises contenues dans currency.json
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const wallet = useSelector((state)=> state.buyer.wallet);
  
  const JSXCurrency = currencyData.currencies.map(element => {
    return(
      <CurrencyLine key={element.code} currency={element} />
    )
  });

  //console.log(currencyData);
  return (
    <div className="home">
      <div className="currency-tab">
        <div className="currency-row title">
          <div className="name">Nom</div>
          <div className="rate">taux en $</div>
          <div className="inverse-rate">taux inversé</div>
          <div className="cta">
            Acheter
          </div>
        </div>
        {JSXCurrency}
      </div>
   </div>
  );
}

export default Home;

