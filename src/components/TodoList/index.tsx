import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { List } from "@ant-design/react-native";

const TodoList: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f9" }}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={"Todos"}>
          <List.Item
            disabled
            extra="箭头向右"
            arrow="horizontal"
            onPress={() => {}}
          >
            asdasd
          </List.Item>
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoList;
