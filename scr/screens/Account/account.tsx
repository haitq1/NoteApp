import * as React from "react";
import { AsyncStorage, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/Home.act";
import styles from "../Home/Home.sty";

function AccountScreen() {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(logout());
    AsyncStorage.removeItem("token");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={submit}>
        <Icon name="log-out-outline" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default AccountScreen;
