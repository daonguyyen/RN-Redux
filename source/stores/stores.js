import {combineReducers} from 'redux'
import numberReducer from '../reducers/numberReducer'

const allReducers = combineReducers({
    numberReducer: numberReducer
})

export default allReducers