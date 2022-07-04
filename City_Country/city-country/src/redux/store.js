import {  legacy_createStore as createStore ,combineReducers } from 'redux'
import { CityReduser } from './AddCity/reducer';
import { CountryReduser } from './AddCountry/reducer';

const RootReduser=combineReducers({
addCity:CityReduser,
addCountry:CountryReduser
})
export const store=createStore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );