import { CHANGE_FIELD, SHOW_BOX, BUY_CTA, SELL_CTA } from "src/actions/buyer";


const initialState = {
    id: 1,
    name:'',
    firstName:'',
    email:'',
    password:'',
    confirmPassword:'',
    wallet:[],
    toggleBox: 'connect-close',
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SELL_CTA :{
            let newWallet = [...state.wallet];
            
            for(let i = 0; i < newWallet.length; i++){
                if(newWallet[i].name == action.name) {
                    newWallet[i].quantity -= action.quantity;
                    if (newWallet[i].quantity === 0){
                        console.log('newWallet1', newWallet);
                        newWallet = [...newWallet].splice(i, 1);
                        console.log('newWallet2', newWallet);
                    }
                    break;
                }
            };
            return{
                ...state,  
                wallet: newWallet,
            }
        }
        case BUY_CTA :{
            let newWallet = [...state.wallet];
            let indicator = false;
            for (let i = 0; i < newWallet.length; i++) {
                if (newWallet[i].name == action.name) {
                  newWallet[i].quantity += action.quantity;
                  indicator = true;
                  break;
                }
            }
            if(indicator == false) {
                newWallet.push({
                    name : action.name, 
                    rate : action.rate, 
                    inverseRate : action.inverseRate ,
                    quantity: action.quantity,
                });
            }
            return{
            ...state,  
            wallet: newWallet,
            }
        }
        case SHOW_BOX :{
            return{
            ...state,
            toggleBox: action.statusModal,
            }
          }
        case CHANGE_FIELD :{
            return{
            ...state,
            [action.field]: action.value,
            }
        }
        default:
            return state;
    }
};

export default reducer;
