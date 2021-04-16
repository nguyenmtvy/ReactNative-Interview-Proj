import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    inputfield: {
        height: 25,
        width: '70%',
    },
    searchbutton: {
        width: '30%',
        height: 25,
        paddingRight: 10

    },
    containerInput: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 50,
        flex: 1,
        backgroundColor: 'red',
        height: 30
    },
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 10
    },
    listContainer: {
        marginTop: 0,
        width: '100%',
        flex: 9
      }
})