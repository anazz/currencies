import { useState } from "react";
import { useSelector } from "react-redux";

import WalletRow from "./walletRow";
import "./styles.scss";
import "../../styles/index.scss"


const Dashboard = () => {

  const wallet = useSelector((state)=> state.buyer.wallet);

  let [sortedCur, setSortedCur] = useState(wallet);
  let [sortedDir, setSortedDir] = useState('up');

  const sortTab = (e) => {
    let type = e.currentTarget.getAttribute('type');
    let sorted = [...sortedCur].sort((a, b) => {
      if (a[type] > b[type]) return sortedDir == 'up' ? 1 : -1;
      if (a[type] < b[type]) return sortedDir == 'up' ? -1 : 1;
      return 0;
    });
    setSortedDir(sortedDir == 'up' ? 'down' : 'up');
    setSortedCur(sorted);
  }

  let JSXCurrency = sortedCur.map(element => {
    console.log('element', element);
    return(
      <WalletRow key={element.name} data={element} />
    )
  });

  return (
    <div className="dashboard">
      <div className="currency-tab tab">
        <div className="currency-row title">
          <div className={`cell name ${sortedDir}`} onClick={sortTab} type="name">Nom
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
          <div className={`cell rate ${sortedDir}`} onClick={sortTab} type="rate">taux en $
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
          <div className={`cell inverse-rate ${sortedDir}`} onClick={sortTab} type="inverseRate">taux inversé
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </div>
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
