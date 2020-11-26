import React, { memo, FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../Home/Home.sty'

interface Props {
  AddSubmit: () => void;
  handleItem: any,
  value: string;
}

const AddToDo: FC<Props> = ({ AddSubmit, handleItem, value }) => {
  const {t} = useTranslation();
  return (<View style={styles.add}>
    <TextInput
      value={value}
      style={styles.Input}
      placeholder={t('body.add')}
      onChangeText={handleItem}
    />
    <TouchableOpacity onPress={AddSubmit}>
      <Icon name="add" style={styles.icon} />
    </TouchableOpacity>
  </View>)
}



export default memo(AddToDo)
