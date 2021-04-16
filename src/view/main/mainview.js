import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, Button} from 'react-native'
import stylesheet from '../../common/style.js'


const data = require('../../data/data.json')

export default class MainView extends Component{
    state = {
        searchName: "",
        advisors: [
            {
                name: "A"
            },
            {
                name: "b"
            }
        ]
    }

    nameForSearch = (name) =>{
        this.setState({
            searchName: name
        })

    }

    searchForName = () =>{

    }

    render(){
        return(
        <View style={stylesheet.container}> 
            <View style={stylesheet.containerInput}>
                <TextInput style={stylesheet.inputfield}
                placeholder="text input"
                value = {this.state.searchName}
                onChangeText = {this.nameForSearch}
                />
                <View style={stylesheet.searchbutton}>
                    <Button onClick={this.searchForName} 
                    title="Search"/>
                </View>
                
            </View>
            <View style = {stylesheet.listContainer}> 
                <FlatList
                data = {data.data.advisorProfileCollection.items}
                keyExtractor = {item => item.displayName}
                renderItem = {items => (
                    <View>
                        <Text>{items.item.displayName}</Text>
                    </View>
                )}/>
            </View>
        </View>
        )
    }
}