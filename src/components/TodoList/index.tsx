import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { List } from "@ant-design/react-native";
import { connect } from "react-redux";

import { Todo } from "../../core/store/ducks/todos/types";
import { ApplicationState } from "../../core/store";

interface StateProps {
  todos: Todo[];
}

type Props = StateProps;

const TodoList = ({ todos }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f9" }}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={"Todos"}>
          {todos.map(todo => (
            <List.Item
              disabled
              extra="箭头向右"
              arrow="horizontal"
              onPress={() => {}}
            >
              {todo.name}
            </List.Item>
          ))}
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

export default connect(mapStateToProps)(TodoList);
