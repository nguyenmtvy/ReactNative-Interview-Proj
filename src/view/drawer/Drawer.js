import React, { useState } from 'react'
import { Text} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import stylesheet from '../../common/style'


const Drawer = (props) => {
    return (
        <DrawerContentScrollView style={stylesheet.scollviewContainer}>
            <Text>Search by:</Text>
            <DrawerItem label="Names"/>
            <DrawerItem label="Categories"/>
        </DrawerContentScrollView>
    )
}

export default Drawer