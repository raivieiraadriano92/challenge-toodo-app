import React, { useEffect } from "react";
import { Button, InputItem, List } from "@ant-design/react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { NavigationScreenProps } from "react-navigation";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import { ApplicationState } from "../../core/store";
import { Todo, TodoNew } from "../../core/store/ducks/todos/types";
import * as TodosActions from "../../core/store/ducks/todos/actions";

import { SafeArea } from "../../styles";

interface StateProps {
  todos: Todo[];
  todoAdd(todo: TodoNew): void;
  todoEdit(todo: Todo): void;
}

type Props = StateProps & NavigationScreenProps;

const TodoForm = ({
  navigation: { navigate, state },
  todoAdd,
  todoEdit,
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
    <SafeArea>
      <Formik
        ref={ref => {
          refForm = ref;
        }}
        initialValues={{ name: "" }}
        onSubmit={(values: TodoNew) => {
          const id = state.params && state.params.id;

          (id ? todoEdit : todoAdd)(values);
          navigate("TodoList");
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        render={(formikBag: FormikProps<TodoNew>) => (
          <List style={{ padding: 16 }}>
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
)(TodoForm);
