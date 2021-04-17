import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    inputfield: {
        height: 30,
        width: '100%',
        marginHorizontal: 5,
        paddingLeft: 10,
        backgroundColor: '#B6B0BD',
        borderRadius: 6,
    },
    halfviewButton: {
        width: '30%',
        marginLeft: 10,
        height: 35,
        paddingRight: 0,
        backgroundColor: '#d9egf3', 
        borderRadius: 6,
    },
    fullviewButton: {
        marginTop: 15,
        width: '95%',
        height: 35,
        paddingRight: 0,
        backgroundColor: '#d9egf3', 
    },
    containerSetting: {
        flexDirection: 'row',
        width: '98%',
        flex: 0.1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
    },
    containerInput: {
        flexDirection: 'row',
        width: '98%',
        height: 40,
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
        flexDirection: 'center',
        flex: 1,
        backgroundColor: '#999891'
    },
    listContainer: {
        marginTop: 30,
        margin: 5,
        width: '100%',
        flex: 19,
        backgroundColor: '#EFEAE0'
      },
    scollviewContainer: {
        width: '100%',
        paddingTop: 30,
        paddingLeft: 10,
        backgroundColor: '#EFEAE0'
    },
    itemContainer: {
        backgroundColor: '#DAB6C3',
        height: 30,
        margin: 10,
        borderRadius: 6,
        paddingLeft: 5,
        alignItems: 'center',
        justifyContent:'center'
    }
})