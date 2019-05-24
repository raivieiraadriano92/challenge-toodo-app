import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Button, InputItem, List } from "@ant-design/react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { NavigationScreenProps } from "react-navigation";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import { ApplicationState } from "../../core/store";
import { Todo, TodoNew } from "../../core/store/ducks/todos/types";
import * as TodosActions from "../../core/store/ducks/todos/actions";

interface StateProps {
  todos: Todo[];
  todoAdd(todo: TodoNew): void;
  todoEdit(todo: Todo): void;
}

type Props = StateProps & NavigationScreenProps;

const TodoForm = ({
  navigation: { navigate, state },
  todoAdd,
  todos
}: Props) => {
  let refForm: Formik<TodoNew> | null;

  useEffect(() => {
    const id = state.params && state.params.id;
    if (id) {
      const todo: Todo | undefined = todos.find(item => item.id === +id);
      if (todo && refForm) {
        refForm.resetForm(todo);
      }
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f9" }}>
      <Formik
        ref={ref => {
          refForm = ref;
        }}
        initialValues={{ name: "" }}
        onSubmit={(values: TodoNew) => {
          todoAdd(values);
          navigate("TodoList");
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        render={(formikBag: FormikProps<TodoNew>) => (
          <List renderHeader={"New Todo"}>
            <InputItem
              autoFocus
              clear
              error={formikBag.touched.name && formikBag.errors.name}
              value={formikBag.values.name}
              onChange={formikBag.handleChange("name")}
              onBlur={formikBag.handleBlur("name")}
              onEndEditing={formikBag.handleSubmit}
              placeholder="Name"
            />
            <List.Item>
              <Button onPress={formikBag.handleSubmit} type="primary">
                Save
              </Button>
            </List.Item>
          </List>
        )}
      />
    </SafeAreaView>
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
)(TodoForm);
