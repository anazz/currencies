import { combineReducers } from "redux";

import buyerReducer from './buyer';
import currencyReducer from './currency';
import equityReducer from './equity';
import testReducer from './test';


const rootReducer = combineReducers({
    buyer:buyerReducer,
    currency:currencyReducer,
    equity:equityReducer,
    test:testReducer,
});

export default rootReducer;