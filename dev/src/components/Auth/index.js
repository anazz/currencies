import { useDispatch, useSelector } from 'react-redux';
import { changeField, showBox, seeForm } from "../../actions/buyer";

import "./styles.scss";

const Auth =() => {
  //nécessaire pour appeler les fonction d'action
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const mail = useSelector((state)=> state.buyer.email);
  const password = useSelector((state)=> state.buyer.password);

  const updateField = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  }

  const closeWindow = (e) => {
    dispatch(showBox('connect-close'));
  }

  const createAccount = (e) => {
    e.preventDefault();
    dispatch(showBox('register-open'));
  }

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <form className="connexion-form">
          <h3>Connexion</h3>
          <div onClick={closeWindow} className="close-button">X</div>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="email" name="email" value={mail} onChange={updateField}/>
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={updateField}/>
          </div>
          <button>Se connecter</button>
          <a onClick={createAccount}>Créer mon compte</a>
        </form>
      </div>
    </div>
  );
}

export default Auth;
