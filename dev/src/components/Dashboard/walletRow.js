//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellCTA } from "../../actions/buyer";
import "./styles.scss";

const WalletRow = ({data}) => {
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);


  const changeQuantity = (e) => {
    let quant = Number(e.target.value);
    if (quant < 1) quant = 1;
    setQuantity(quant <= data.quantity ? quant : data.quantity);
  }

  const sellCur = () => {
    dispatch(sellCTA(data.name, quantity));
    setQuantity(1);
  }

  return(
    <div className="currency-row">
      <div className="name">{data.name}</div>
      <div className="rate">{data.rate}</div>
      <div className="inverse-rate">{data.inverseRate}</div>
      <div className="quantity">{data.quantity}</div>
      <div className="cta">
        <button onClick={sellCur} type="button" className="buy-cta">Vendre</button>
        <input type="number" className="input-number" value={quantity} onChange={changeQuantity}/>
      </div>
    </div>
  );
}

export default WalletRow;