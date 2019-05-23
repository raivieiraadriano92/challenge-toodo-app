import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Button } from "@ant-design/react-native";

const TodoList: React.FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f9" }}>
    <Button type="primary">Save</Button>
  </SafeAreaView>
);

export default TodoList;
