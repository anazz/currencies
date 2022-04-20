import { TEST_ACTION, CHANGE_FIELD, CHANGE_COLOR, SEE_PASSWORD, SHOW_BOX } from "src/actions/test";

const initialState = {
    id: 1,
    name:'',
    firstName:'',
    email:'',
    password:'',
    seePassword: 'password',
    color: true,
    randomColor: 'red',
    wallet:[],
    toggleBox: false,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_COLOR :{
            const allColors = ['red', 'green', 'blue', 'yellow', 'pink']; 
            return{
            ...state,
            randomColor: allColors[Math.floor(Math.random() * 5)], 
            }
          }
        case SHOW_BOX :{
            return{
            ...state,
            toggleBox: !state.toggleBox,
            }
          }
        case SEE_PASSWORD :{
            return{
            ...state,
            seePassword: action.trigerVisible == true ? 'text' : 'password',
            }
          }
        case CHANGE_FIELD :{
            return{
            ...state,
            [action.field]: action.value,
            }
          }
        case TEST_ACTION :{
            return{
            ...state,
            color: !state.color,
            email: 'robert',
            }
        }
        default:
            return state;
    }
};

export default reducer;
