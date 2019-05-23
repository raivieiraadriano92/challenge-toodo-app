import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      TodoList,
      TodoForm
    },
    {
      initialRouteName: "TodoList"
    }
  )
);

export default Routes;
