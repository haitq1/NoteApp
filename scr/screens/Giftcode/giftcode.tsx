import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  View,
  FlatList,
  AsyncStorage,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ToDoItem from "../components/ToDoItem";
import AddToDo from "../components/AddToDo";
import { TextInput } from "react-native-gesture-handler";

function GiftCodeScreen() {
  const toDoList = useSelector((state: any) => state.home.toDoList);
  const [result, setResult] = useState(null);
  const [idd, setId] = useState(0);
  const onChange = useCallback(
    (text: any) => {
      setId(text);
    },
    [idd]
  );
  useEffect(() => {
    setResult(toDoList.filter((id: any) => id.id == idd));
  }, [idd]);
  return (
    <View style={styles.container}>
      <TextInput  

      placeholder={'Nhập'}
    onChangeText={onChange} />
      <Image source={require("./img1.jpg")} />
      <Text style={styles.titleText}>VOUCHER TOCOTOCO TRỊ GIÁ 50.000 Đ </Text>
      <Text style={styles.baseText}>
        Phần thưởng của bạn là 1 voucher TocoToco trị giá 50.000đ sử dụng tại
        tất cả các cửa hàng TocoToco trên toàn quốc. Vui lòng đưa mã code bên
        dưới cho nhân viên của cửa hàng.
      </Text>
      <View>
        <FlatList
          data={result}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.status}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default GiftCodeScreen;

const styles = StyleSheet.create({
  baseText: {
    padding: 10,
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    color: "black",
    padding: 30,
    margin: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
