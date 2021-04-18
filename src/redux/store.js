import { createStore, combineReducers } from 'redux'
import { filterReducer } from './reducers'

const rootReducer = combineReducers({
    filter: filterReducer,
})

const configureStore = () => createStore(rootReducer)

export default configureStore