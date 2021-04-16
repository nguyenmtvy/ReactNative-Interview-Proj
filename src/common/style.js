import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    inputfield: {
        height: 35,
        width: '50%',
        paddingLeft: 5,
        backgroundColor: '#B6B0BD',
        borderRadius: 6
    },
    searchbutton: {
        width: '30%',
        marginTop: 0,
        height: 35,
        paddingRight: 0,
        backgroundColor: '#d9egf3', 
        borderRadius: 6
    },
    containerInput: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#EFEAE0'
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 20,
        backgroundColor: '#999891'
    },
    listContainer: {
        marginTop: 30,
        margin: 5,
        width: '100%',
        flex: 19,
        backgroundColor: '#EFEAE0'
      },
    itemContainer: {
        backgroundColor: '#DAB6C3',
        height: 30,
        margin: 10,
        borderRadius: 6,
        paddingLeft: 5
    }
})