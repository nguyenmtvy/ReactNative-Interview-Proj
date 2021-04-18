import React, { useState } from 'react'
import { Text} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useDispatch } from 'react-redux'

import { filterName, filterCategory} from '../../redux/actions'
import stylesheet from '../../common/style'


const Drawer = (props) => {
    const dispatch = useDispatch()
    dispatch(filterName())
    return (
        <DrawerContentScrollView style={stylesheet.scollviewContainer}>
            <Text>Search by:</Text>
            <DrawerItem label="Names" onPress={() => dispatch(filterName())}/>
            <DrawerItem label="Categories" onPress={() => dispatch(filterCategory())}/>
        </DrawerContentScrollView>
    )
}

export default Drawer