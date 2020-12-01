import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    home: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,

    },
    list: {
        marginTop: 20,
        marginBottom: 40,
        paddingBottom : 100,
    },
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    item: {
        flex: 1,

    },
    Input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1
    },
    Add: {
        color: 'coral'


    },
    edit: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textedit: {

        textAlign: 'center',
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor:'green'
    },
    centeredView: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    hightlight: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    modalView: {
        margin: 100,
        width: DEVICE_WIDTH / 2,
        height: DEVICE_HEIGHT / 3,
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    Button: {
        padding: 10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    color: {
        backgroundColor:'coral'
    }


});

export default styles;