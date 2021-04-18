
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MainView from './src/view/main/MainView'
import configureStore from './src/redux/store'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainView/>
      </NavigationContainer>
    </Provider>
    
  );
}
