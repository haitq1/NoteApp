import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import {useState, useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Language} from '../../redux/actions/Home.act';
import {TouchableOpacity} from 'react-native-gesture-handler';

function AccountScreen() {

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
<Text>Họ và tên:</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 40,
    height: 30,
    resizeMode: 'stretch',
  },
});
export default AccountScreen;