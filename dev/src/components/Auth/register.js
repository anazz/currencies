import { useDispatch, useSelector } from 'react-redux';
import { changeField, showBox, seeForm } from "../../actions/buyer";

import "./styles.scss";

const Register =() => {

  //nécessaire pour appeler les fonction d'actionactions
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const mail = useSelector((state)=> state.buyer.email);
  const password = useSelector((state)=> state.buyer.password);
  const name = useSelector((state)=> state.buyer.name);
  const confirmPassword = useSelector((state)=> state.buyer.confirmPassword);

  const updateField = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  }

  const closeWindow = (e) => {
    dispatch(showBox('connect-close'));
  }

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <form className="subscription-form">
          <h3>Inscription</h3>
          <div onClick={closeWindow} className="close-button">X</div>
          <div className="input-wrapper">
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={updateField}/>
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="email" name="email" value={mail} onChange={updateField}/>
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={updateField}/>
          </div>
          <div className="input-wrapper">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={updateField}/>
          </div>
          <button>S'inscrire</button>
        </form> 
      </div>
    </div>
  );
}

export default Register;
