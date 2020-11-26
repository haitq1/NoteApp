import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from '../Home/Home.sty';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {Complete, Uncomplete} from '../../redux/actions/Home.act';
const ToDoItem = ({
  item,
  RemoveSubmit,
  EditSubmit,
  value2,
  handleItem2,
}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const onComplete = () => {
    isComplete
      ? (setIsComplete(false), dispatch(Uncomplete()))
      : (setIsComplete(true), dispatch(Complete()));
  };
  console.log(item);
  return (
    <ScrollView>
      <View
        style={[
          {backgroundColor: isComplete ? 'green' : 'coral'},
          styles.container2,
        ]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                value={value2}
                style={styles.Input}
                placeholder="Edit To Do"
                onChangeText={handleItem2}
              />
              <View style={styles.hightlight}>
                <View style={styles.Button}>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      EditSubmit(item.id);
                    }}>
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.Button}>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.item}>{item.status}</Text>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon style={styles.icon} name="create-outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onComplete}>
          <Icon
            style={styles.icon}
            name={isComplete ? 'checkmark-done-outline' : 'checkmark-outline'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => RemoveSubmit(item.id)}>
          <Icon style={styles.icon} name="trash-outline" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ToDoItem;
