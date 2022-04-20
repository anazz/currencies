//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCTA } from "../../actions/buyer";
import "./styles.scss";

const CurrencyLine = ({currency}) => {
  const dispatch = useDispatch();

  const [quantity,setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const getCTA = (e) => {
    let currencyEl = {
      name: currency.name,
      rate: currency.rate,
      inverseRate: currency.inverseRate,
      quantity: parseInt(quantity),
    }
    dispatch(buyCTA(currencyEl));
  }
  return(
    <div className="currency-row">
      <div className="name">{currency.name}</div>
      <div className="rate">{currency.rate}</div>
      <div className="inverse-rate">{currency.inverseRate}</div>
      <div className="cta">
        <button onClick={getCTA} type="button" className="buy-cta">Acheter</button>
        <input type="number" className="input-number" value={quantity} onChange={changeQuantity}/>
      </div>
    </div>
  );
}

export default CurrencyLine;

