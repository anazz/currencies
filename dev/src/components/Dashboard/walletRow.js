//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellCTA } from "../../actions/buyer";
import "./styles.scss";

const WalletRow = ({currency}) => {
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const sellCur = () => {
    console.log('currency.quantity', currency.quantity);
    dispatch(sellCTA(currency.name, Number(quantity)));
  }

  return(
    <div className="currency-row">
      <div className="name">{currency.name}</div>
      <div className="rate">{currency.rate}</div>
      <div className="inverse-rate">{currency.inverseRate}</div>
      <div className="quantity">{currency.quantity}</div>
      <div className="cta">
        <button onClick={sellCur} type="button" className="buy-cta">Vendre</button>
        <input type="number" className="input-number" value={quantity} onChange={changeQuantity}/>
      </div>
    </div>
  );
}

export default WalletRow;