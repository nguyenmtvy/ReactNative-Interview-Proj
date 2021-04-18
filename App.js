
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MainView from './src/view/main/MainView'


export default function App() {
  return (
    <NavigationContainer>
      <MainView/>
    </NavigationContainer>
  );
}
