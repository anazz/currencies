import { useSelector } from "react-redux";

import WalletRow from "./walletRow";
import "./styles.scss";


const Dashboard = () => {

  const wallet = useSelector((state)=> state.buyer.wallet);

  const JSXCurrency = wallet.map(element => {
    return(
      <WalletRow key={element.name} currency={element} />
    )
  });

  return (
    <div className="dashboard">
      <div className="currency-tab">
        <div className="currency-row title">
          <div className="name">Nom</div>
          <div className="rate">taux en $</div>
          <div className="inverse-rate">taux inversé</div>
          <div className="quantity">quantité</div>
          <div className="cta">
            Vendre
          </div>
        </div>
        {JSXCurrency}
      </div>
   </div>
  );
}

export default Dashboard;
