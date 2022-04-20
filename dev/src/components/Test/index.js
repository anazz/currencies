//imports nécessaire pour pouvoir appeler les propriétés du state et appelé les fonctions du fichier action
import { useDispatch, useSelector } from 'react-redux';

import { testAction, changeField, seePassword, showBox, changeColor } from "../../actions/test";

import "./styles.scss";

const Test = () => {
  //nécessaire pour appeler les fonction d'actionactions
  const dispatch = useDispatch();

  //pour récupérer les propriétés du state
  const colorBox = useSelector((state)=> state.test.color);
  const mail = useSelector((state)=> state.test.email);
  const name = useSelector((state)=> state.test.name);
  const firstName = useSelector((state)=> state.test.firstName);
  const password = useSelector((state) => state.test.password);
  const viewPassword = useSelector((state) => state.test.seePassword);
  const viewBox = useSelector((state) => state.test.toggleBox);
  const switchColor = useSelector((state) => state.test.randomColor);

  const randomColor = () => {
    dispatch(changeColor());
  }

  const testFunction = () => {
    dispatch(testAction());
  }

  const updateField = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  }

  const showPassword = (e) => {
    dispatch(seePassword(e.target.checked));
  }

  const toggleBox = () => {
    dispatch(showBox());
  }

  const style={
    backgroundColor:switchColor,
  }

  return (
    <div className="home">
      <input type="text" name="name" value={name} onChange={updateField} />
      <input type="email" name="email" value={mail} onChange={updateField} />
      <input type="text" name="firstName" value={firstName} onChange={updateField} />

      <button onClick={testFunction}>toggle color</button>
      <div className={colorBox == true ? "box" : "box on"}></div>

      <button onClick={randomColor}>random color</button>
      <div className="box" style={style}></div>

      <div className="email">{mail}</div>
      <input type={viewPassword} name="password" value={password} onChange={updateField} />
      <input type="checkbox" onChange={showPassword} />Show Password
      <button onClick={toggleBox}>show box</button>
      {viewBox && 
        <div className="box"></div>
      }
   </div>
  );
}

export default Test;

