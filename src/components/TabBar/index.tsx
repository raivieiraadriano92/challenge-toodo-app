import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Icon, List, TabBar as TabBarAnt } from "@ant-design/react-native";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const TabBar: React.FC = () => {
  return (
    <TabBarAnt
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5"
    >
      <TabBarAnt.Item
        icon={<Icon name="ordered-list" />}
        title="Todos"
        badge={2}
        onPress={() => {}}
      >
        <TodoList />
      </TabBarAnt.Item>
      <TabBarAnt.Item
        icon={<Icon name="plus" />}
        title="Add"
        badge={2}
        selected
        onPress={() => {}}
      >
        <TodoForm />
      </TabBarAnt.Item>
    </TabBarAnt>
  );
};

export default TabBar;
