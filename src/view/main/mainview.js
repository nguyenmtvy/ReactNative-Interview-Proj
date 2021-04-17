import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Button, StatusBar} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'

import stylesheet from '../../common/style.js'
import Drawer from '../drawer/Drawer'


const collections = require('../../data/data.json')

const drawerNavigator = createDrawerNavigator()

const HomeView = ({navigation}) => {
    const [searchValue, setSearchValue] = useState("");
  
    const [advisorList, setAdvisorList] = useState([
      {
        name: "A",
      },
      {
        name: "b",
      },
    ]);

    const [listHorizontal, setList] = useState(false);
  
    const handleSearchChange = (value) => setSearchValue(value);
  
    const handleSearchClick = () => {};


    return (
      <View style={stylesheet.container}>
        <View style={stylesheet.containerSetting}>
          {/* <View style={stylesheet.halfviewButton}>
            <Button onPress={() => setList(!listHorizontal)} title="Verical" color="#42b883" />
          </View> */}
          <View style={stylesheet.halfviewButton}>
            <Button  title="Nav" color="#42b883" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
          </View>
        </View>
        <View style={stylesheet.containerInput}>
          <TextInput
            style={stylesheet.inputfield}
            placeholder="Search name ..."
            placeholderTextColor="#fff"
            value={searchValue}
            onChangeText={handleSearchChange}
          />
        </View>
        <View style={stylesheet.fullviewButton}>
          <Button onPress={() => setList(!listHorizontal)} title="Search" color="#42b883" />
        </View>
        <View style={stylesheet.listContainer}>
          <FlatList
            horizontal={listHorizontal}
            data={collections.data.advisorProfileCollection.items}
            keyExtractor={(item) => item.sys.id}
            renderItem={(items) => (
              <View style={stylesheet.itemContainer}>
                <Text style={stylesheet.listItem}>{items.item.displayName}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  };
  
  const MainView = () =>{
    return(
        <drawerNavigator.Navigator initialRouteName="HomeView" drawerContent={props => <Drawer/>}>
          <drawerNavigator.Screen name="HomeView" component={HomeView}/>
        </drawerNavigator.Navigator>
      
    )
  }
  export default MainView;