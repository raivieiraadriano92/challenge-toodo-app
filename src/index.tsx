import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";

import Routes from "./config/routes";
import store from "./core/store";

const App: React.FC = () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
