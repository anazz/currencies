//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCTA } from "../../actions/buyer";
import "./styles.scss";

const CurrencyLine = ({currency}) => {
  const dispatch = useDispatch();
  
  const [quantity,setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity(Number(e.target.value) > 0 ? Number(e.target.value) : 1);
  }

  const getCTA = (e) => {
    dispatch(buyCTA(currency.name, currency.rate, currency.inverseRate, quantity));
  }


  return(
    <div className="currency-row">
      <div className="cell name">{currency.name}</div>
      <div className="cell rate">{currency.rate}</div>
      <div className="cell inverse-rate">{currency.inverseRate}</div>
      <div className="cell cta">
        <button onClick={getCTA} type="button" className="buy-cta">Acheter</button>
        <input type="number" className="input-number" value={quantity} onChange={changeQuantity}/>
      </div>
    </div>
  );
}

export default CurrencyLine;

