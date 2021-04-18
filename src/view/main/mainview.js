import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Button, Image, TouchableHighlight} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { getAdvisors } from '../../redux/actions'
import stylesheet from '../../common/style.js'
import Drawer from '../drawer/Drawer'

const placeholderImage = require('../../images/img_173956.png')

const drawerNavigator = createDrawerNavigator()


const HomeView = ({navigation}) => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState("");

    const advisorsList = useSelector(state => state.filter.advisorsList)
  
    const handleSearchChange = (value) => setSearchValue(value);

    const getAdvisorsList = () => {
      dispatch( getAdvisors(searchValue))
    }

    return (
      <View style={stylesheet.container}>
        <View style={stylesheet.containerSetting}>
          {/* <View style={stylesheet.halfviewButton}>
            <Button onPress={() => setList(!listHorizontal)} title="Verical" color="#42b883" />
          </View> */}
          <View style={stylesheet.halfviewButton}>
            <TouchableHighlight  color="#FFF7F6" underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={{height: 30, width: 30}} source={{uri: "https://img.icons8.com/plasticine/100/000000/circled-menu.png"}}/>
            </TouchableHighlight>
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
          <Button onPress={() => getAdvisorsList()} title="Search" color="#FFB8C7" ></Button>
        </View>
        <View style={stylesheet.listContainer}>
          <FlatList
            data={advisorsList}
            keyExtractor={(item) => item.sys.id}
            renderItem={(items) => (
              <View style={stylesheet.itemContainer}>
                <Image style={{width: 100, height: 100, borderRadius: 200}} source={items.item.avatarUrl  ? {uri:items.item.avatarUrl.url} : placeholderImage}/>
                <View style={stylesheet.containerInfo}>
                  <View style={stylesheet.containerText}>
                    <Text>Name: </Text>
                    <Text>{items.item.displayName}</Text>
                  </View>
                  <View style={stylesheet.containerText}>
                    <Text>Email: </Text>
                    <Text>{items.item.email}</Text>
                  </View>
                  <View style={stylesheet.containerText}>
                    <Text>Phone: </Text>
                    <Text>{items.item.phone}</Text>
                  </View>
                <FlatList
                  data={items.item.categoriesCollection.items}
                  keyExtractor={(item1) => item1.sys.id}
                  renderItem={(categories) => (
                    <View>
                      <Text>{categories.item.displayName}</Text>
                    </View>
                  )}
                  />
                </View>
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