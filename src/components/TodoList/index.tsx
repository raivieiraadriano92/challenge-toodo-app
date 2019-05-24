import React, { useEffect, useState } from "react";
import { Icon, List, Modal } from "@ant-design/react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { NavigationScreenProps } from "react-navigation";

import { Todo } from "../../core/store/ducks/todos/types";
import { ApplicationState } from "../../core/store";
import * as TodosActions from "../../core/store/ducks/todos/actions";

import { SafeArea } from "../../styles";

import { Scroll, SegmentedControl } from "./styles";

interface StateProps {
  todos: Todo[];
  todoRemove(id: number): void;
  todoToggle(id: number): void;
}

type Props = StateProps & NavigationScreenProps;

const TodoList = ({
  navigation: { navigate },
  todoRemove,
  todos,
  todoToggle
}: Props) => {
  const [list, setList] = useState(todos);

  const handleChangeSegmentedControl = (value: string) => {
    setList(
      todos.filter((todo: Todo) => {
        if (value === "Done") return todo.done;

        if (value === "ToDo") return !todo.done;

        return true;
      })
    );
  };

  const handleItemPress = (id: number) => {
    Modal.operation([
      { text: "Edit", onPress: () => navigate("TodoForm", { id }) },
      { text: "Remove", onPress: () => todoRemove(id) },
      { text: "Toggle", onPress: () => todoToggle(id) }
    ]);
  };

  return (
    <SafeArea>
      <SegmentedControl
        values={["All", "ToDo", "Done"]}
        onValueChange={handleChangeSegmentedControl}
      />
      <Scroll
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List>
          {list.map(todo => (
            <List.Item
              arrow="horizontal"
              key={todo.id}
              onPress={() => handleItemPress(todo.id)}
              thumb={
                <Icon
                  color={todo.done ? "#52c41a" : undefined}
                  name={todo.done ? "check-circle" : "minus-circle"}
                  style={{ marginRight: 8 }}
                />
              }
            >
              {todo.name}
            </List.Item>
          ))}
        </List>
      </Scroll>
    </SafeArea>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
