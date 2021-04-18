import { FILTER_CATEGORY, FILTER_NAME, GET_LIST } from './actionTypes'
const data = require('../data/data.json').data

export const getAdvisorByName = (name) => {
    name = name.toLowerCase()
    return data.advisorProfileCollection.items.filter(item => item.displayName.toLocaleLowerCase().includes(name))
}

export const getAdvisorByCategory = (categoryName) => {
    categoryName = categoryName.toLocaleLowerCase()
    var advisorList = []
    data.advisorProfileCollection.items.forEach(advisor => {
        if (advisor.categoriesCollection.items.find(category => category.displayName.toLocaleLowerCase().includes(categoryName))){
            advisorList.push(advisor)
        }
        
    })
    return advisorList
}

const initialState = {
    filterType: FILTER_NAME,
    advisorsList: data.advisorProfileCollection.items
}

export const filterReducer = (state = initialState, action) => {
    if (action.type === GET_LIST){
        switch (state.filterType){
            case FILTER_CATEGORY: {
                return{
                    ...state,
                    advisorsList: getAdvisorByCategory(action.payload)
                }
            }
            case FILTER_NAME: {
                return{
                    ...state,
                    advisorsList: getAdvisorByName(action.payload)
                }
            }
        }
    }
    return {
        ...state,
        filterType: action.payload
    }
}
