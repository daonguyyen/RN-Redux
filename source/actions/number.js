import {UP_NUMBER, DOWN_NUMBER, CHANGE_BG_COLOR} from './types'

export const upNumber = (number) => (
    {
        type : UP_NUMBER,
        data : number
    }
)

export const downNumber = (number) => (
    {
        type : DOWN_NUMBER,
        data : number
    }
)

export const changeBgColor = (bgColor) => (
    {
        type : CHANGE_BG_COLOR,
        data : bgColor
    }
)