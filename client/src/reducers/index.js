import Provinces from './Provinces';
import Combos from './Combos';
import Meals from './Meals';
import {combineReducers} from 'redux';

export default combineReducers({
    combos: Combos,
    meals: Meals,
    provinces: Provinces
});