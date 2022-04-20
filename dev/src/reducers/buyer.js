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
            let newWallet = state.wallet;
            
            newWallet.forEach(element => {
                if (element.name == action.name) {
                    element.quantity -= action.quantity;
                } 
            });
            return{
                ...state,  
                wallet: newWallet,
            }
        }
        case BUY_CTA :{
            let newWallet = state.wallet;

            //let existingCur = newWallet.find(elem => elem.name == action.currency.name);
            //console.log(existingCur);
            
            let indicator = false;
            newWallet.forEach(element => {
                if (element.name == action.currency.name) {
                    element.quantity += action.currency.quantity;
                    indicator = true;
                } 
            });
            if(indicator == false) {
                let newCurrency = {...action.currency};
                newWallet.push(newCurrency);
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
