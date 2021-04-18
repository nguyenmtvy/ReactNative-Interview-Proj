import { FILTER_CATEGORY, FILTER_NAME, FILTER_NONE, GET_LIST } from './actionTypes'

export const filterCategory = () =>{
    return {
        type: FILTER_CATEGORY,
        payload: 'FILTER_CATEGORY'
    }
}

export const filterName = () => {
    console.log('NAME')
    return{
        type: FILTER_NAME,
        payload: 'FILTER_NAME'
    }
}

export const filterNone = () => {
    return{
        type: FILTER_NONE,
        payload: 'FILTER_CATEGORY'
    }
}

export const getAdvisors = (payload) =>{
    return{
        type: GET_LIST,
        payload: payload
    }
}