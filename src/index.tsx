import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider as ProviderAntd } from "@ant-design/react-native";

import Routes from "./config/routes";
import store from "./core/store";

const App: React.FC = () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <ProviderAntd>
        <Routes />
      </ProviderAntd>
    </PersistGate>
  </Provider>
);

export default App;
