import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Button } from "@ant-design/react-native";

import { headerStyle } from "../styles";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Routes = createAppContainer(
  createStackNavigator(
    {
      TodoList: {
        screen: TodoList,
        navigationOptions: ({ navigation: { navigate } }: any) => ({
          ...headerStyle,
          title: "List",
          headerBackTitle: null,
          headerRight: (
            <Button
              onPress={() => navigate("TodoForm")}
              size="small"
              style={{ margin: 16 }}
              type="primary"
            >
              Add
            </Button>
          )
        })
      },
      TodoForm: {
        screen: TodoForm,
        navigationOptions: ({ navigation: { state } }: any) => ({
          ...headerStyle,
          title: `${state.params && state.params.id ? "Edit" : "New"} Todo`
        })
      }
    },
    {
      initialRouteName: "TodoList"
    }
  )
);

export default Routes;
