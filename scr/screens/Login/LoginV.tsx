import React, { useState, FormEvent, useEffect, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
  Image,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { useTheme } from "react-native-paper";
import { LoginRequested } from "../../redux/actions/Login.act";

interface Props {
  LoginPage: any;
}
const signInschema = yup.object().shape({
  username: yup.string().min(4).required(),
  password: yup.string().min(8).required(),
});
const LoginPage = (props: Props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(signInschema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  const dispatch = useDispatch();
  const submit = (data: any) => {
    dispatch(LoginRequested(data.username, data.password));
    AsyncStorage.setItem("token", props.LoginPage.token);
  };
  const [isPrivate, setIsPrivate] = useState<boolean>(true);
  const handleEntryPassword = useCallback(() => {
    isPrivate ? setIsPrivate(false) : setIsPrivate(true);
  }, [isPrivate]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "coral",
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: "coral",
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={"coral"} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(text) => {
              setValue("username", text);
            }}
          />
        </View>
        {errors.username && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: "coral",
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={"coral"} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={isPrivate}
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(text) => {
              setValue("password", text);
            }}
          />
          <TouchableOpacity onPress={handleEntryPassword}>
            {isPrivate ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={handleSubmit(submit)}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
const mapState = (state: any) => ({
  LoginPage: state.login,
});
export default connect(mapState)(LoginPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
