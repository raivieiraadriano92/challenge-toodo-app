import { createAppContainer, createStackNavigator } from "react-navigation";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Routes = createAppContainer(
  createStackNavigator(
    {
      TodoList: {
        screen: TodoList,
        navigationOptions: () => ({
          header: null
        })
      },
      TodoForm
    },
    {
      initialRouteName: "TodoList"
    }
  )
);

export default Routes;
