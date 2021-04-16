import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Button} from 'react-native'
import stylesheet from '../../common/style.js'


const collections = require('../../data/data.json')

const MainView = () => {
    const [searchValue, setSearchValue] = useState("");
  
    const [advisorList, setAdvisorList] = useState([
      {
        name: "A",
      },
      {
        name: "b",
      },
    ]);
  
    const handleSearchChange = (value) => setSearchValue(value);
  
    const handleSearchClick = () => {};
  
    return (
      <View style={stylesheet.container}>
        <View style={stylesheet.containerInput}>
          <TextInput
            style={stylesheet.inputfield}
            placeholder="Search name ..."
            placeholderTextColor="#fff"
            value={searchValue}
            onChangeText={handleSearchChange}
          />
          <View style={stylesheet.searchbutton}>
            <Button onClick={handleSearchClick} title="Search" color="#42b883" />
          </View>
        </View>
        <View style={stylesheet.listContainer}>
          <FlatList
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
  
  export default MainView;