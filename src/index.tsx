import React from "react";
import { StatusBar } from "react-native";
import { Provider as ProviderAntd } from "@ant-design/react-native";

import Routes from "./config/routes";
import AppContainer from "./core/components/AppContainer";

StatusBar.setBarStyle("light-content");

const App: React.FC = () => (
  <AppContainer>
    <ProviderAntd>
      <Routes />
    </ProviderAntd>
  </AppContainer>
);

export default App;
