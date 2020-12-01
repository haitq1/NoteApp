import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const RewardScreen = () => {
  const { t } = useTranslation();
  const total = useSelector((state: any) => state.home.total);
  const completes = useSelector((state: any) => state.home.complete);
  const uncompletes = useSelector((state: any) => state.home.uncomplete);
  const completeText = t("reward.complete");
  const uncompleteText = t("reward.uncomplete");
  const totalText = t("reward.total");
  const [complete, setComplete] = useState(completeText);
  useEffect(() => {
    setComplete(completeText);
  }, [completeText]);
  useEffect(() => {
    setunComplete(uncompleteText);
  }, [uncompleteText]);
  useEffect(() => {
    setTotals(totalText);
  }, [totalText]);
  const handleComplete = useCallback(() => {
    complete == completeText
      ? setComplete(completes)
      : setComplete(completeText);
  }, [completeText, complete, completes]);
  const [uncomplete, setunComplete] = useState(uncompleteText);
  const handleUncomplete = () => {
    uncomplete == uncompleteText
      ? setunComplete(uncompletes)
      : setunComplete(uncompleteText);
  };
  const [totals, setTotals] = useState(totalText);
  const handleTotal = () => {
    totals == totalText ? setTotals(total) : setTotals(totalText);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={{ padding: 20 }} onPress={handleComplete}>
        <Text style={styles.bigblue}>{complete}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20 }} onPress={handleUncomplete}>
        <Text style={styles.bigblue}>{uncomplete}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20 }} onPress={handleTotal}>
        <Text style={styles.bigblue}>{totals}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RewardScreen;
const styles = StyleSheet.create({
  bigblue: {
    color: "black",
    borderRadius: 30,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
  },
});
