import React, { useState, FormEvent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, TextInput, AsyncStorage, Alert, Image } from 'react-native';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginRequested } from '../../redux/actions/Login.act'
import styles from './Login.sty';

interface Props {
  LoginPage: any,
}
const signInschema = yup.object().shape({
  username: yup.string().min(1).required(),
  password: yup.string().min(1).required(),
})
const LoginPage = (props: Props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(signInschema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  useEffect(() => {
    register("username");
    register("password");
  }, [register])
  const dispatch = useDispatch();
  const submit = (data: any) => {
    dispatch(LoginRequested(data.username, data.password));
    AsyncStorage.setItem('token', props.LoginPage.token);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput placeholder="Username"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.txtInput}
        onChangeText={text => { setValue('username', text) }}
      />
      {errors.username && <Text>You have not entered username</Text>}
      <TextInput placeholder="Password"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={text => { setValue('password', text) }}
      />
      {errors.password && <Text>You have not entered password</Text>}
      <TouchableOpacity onPress={handleSubmit(submit)} style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapState = (state: any) => ({
  LoginPage: state.login,
})
export default connect(
  mapState
)(LoginPage);