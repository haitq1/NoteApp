import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {View, FlatList, AsyncStorage, Alert, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../components/Header';
import ToDoItem from '../components/ToDoItem';
import AddToDo from '../components/AddToDo';
import styles from './Home.sty';
import i18n from '../../localization/i18n';
import {Switch} from 'react-native-switch';
import { useTranslation } from 'react-i18next'
import {
  Add,
  Delete,
  Edit,
  Complete,
  Language,
  logout,
} from '../../redux/actions/Home.act';
import {number} from 'yup';
import SwitchSelector from 'react-native-switch-selector';

const useConnect = () => {
  const toDoList = useSelector((state: any) => state.home.toDoList);
  const mapState = {
    toDoList,
  };
  const dispatch = useDispatch();
  const mapDispatch = useMemo(
    () => ({
      onAdd: (value: string) => dispatch(Add(value)),
      onRemove: (id: number) => dispatch(Delete(id)),
      onEdit: (id: number, value2: string) => dispatch(Edit(id, value2)),
      onLanguage: (language: string) => dispatch(Language(language)),
    }),
    [dispatch],
  );
  return {
    ...mapState,
    ...mapDispatch,
  };
};
const ToDoList = () => {
  const {
    toDoList,
    onAdd,
    onRemove,
    onEdit,
    onLanguage,
  } = useConnect();
  const [status, setStatus] = useState('');
  const [status2, setStatus2] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(logout());
    AsyncStorage.removeItem('token');
  };
  const AddSubmit = useCallback(() => {
    if (status.length > 0) {
      onAdd(status);
      setStatus('');
    }
  }, [onAdd, status]);
  const RemoveSubmit = useCallback(
    (id: number) => {
      onRemove(id);
    },
    [onRemove],
  );
  const EditSubmit = useCallback(
    (id: number) => {
      if (status2.length > 0) {
        setStatus2('');
        onEdit(id, status2);
      }
    },
    [onEdit, status2],
  );
  const handleItem = (status: string) => {
    setStatus(status);
  };
  const handleItem2 = (status2: string) => {
    setStatus2(status2);
  };
  return (
    <View style={styles.container}>
      <Header submit={submit} />
      <View style={styles.content}>
        <AddToDo handleItem={handleItem} AddSubmit={AddSubmit} value={status} />
        <View style={styles.list}>
          <FlatList
            data={toDoList}
            renderItem={({item}) => (
              <ToDoItem
                item={item}
                RemoveSubmit={RemoveSubmit}
                EditSubmit={EditSubmit}
                value2={status2}
                handleItem2={handleItem2}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default ToDoList;
