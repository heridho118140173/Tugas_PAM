import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { turnOn, turnOff } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: `${counter}` }}>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 6, paddingTop: 6, paddingLeft: 25, paddingRight: 25 }} onPress={() => dispatch(turnOff(counter))}>
        <Text style={{ fontSize: 30 }}>kembali</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50, marginLeft: 20, marginRight: 20 }}>{counter}</Text>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 6, paddingTop: 6, paddingLeft: 25, paddingRight: 25 }} onPress={() => dispatch(turnOn(counter))}>
        <Text style={{ fontSize: 30 }}>ubah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
