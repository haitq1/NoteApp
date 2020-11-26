import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    color: 'red'
  },
  txtInput: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: DEVICE_WIDTH - 40,

    marginHorizontal: 20,
    padding: 8,
    borderRadius: 20,
    color: '#000',
    marginTop: 2
  },
  btnLogin: {
    width: DEVICE_WIDTH - 40,
    backgroundColor: 'rgba(0,145,234,1)',
    padding: 8,
    borderRadius: 20,
    marginTop: 2

  },
  txtLogin: {
    color: '#fff',
    textAlign: 'center'
  }
});
export default styles;