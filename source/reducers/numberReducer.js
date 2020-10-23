import { UP_NUMBER, DOWN_NUMBER, CHANGE_BG_COLOR } from '../actions/types'

const initialState = {
    number : 0,
    bgColor: 'white'
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case UP_NUMBER:
            return {
                ...state,
                number: state.number + 1
            }
        case DOWN_NUMBER:
            return {
                ...state,
                number: state.number - 1
            }
        case CHANGE_BG_COLOR: 
            return {
                ...state,
                bgColor: 'yellow'
            }
        default:
            return state;
    }
}

export default numberReducer