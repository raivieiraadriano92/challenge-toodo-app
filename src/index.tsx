import React from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";

import TabBar from "./components/TabBar";
import store from "./core/store";

const App: React.FC = () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <TabBar />
    </PersistGate>
  </Provider>
);

export default App;
