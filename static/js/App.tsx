/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Route, RouteProps, BrowserRouter, Switch } from "react-router-dom";
import { useWallet } from "bscuw";

import routes from "./routes";
import GlobalStyles from "./styles/global";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const { connect } = useWallet();

  React.useEffect(() => {
    checkWallet();
  }, []);

  const checkWallet = (): void => {
    const getConnectorId: null | string = localStorage.getItem("connectorId");
    if (
      (getConnectorId !== null && getConnectorId === "injected") ||
      getConnectorId === "bsc"
    ) {
      connect(getConnectorId);
    } else {
      localStorage.removeItem("connectorId");
      localStorage.removeItem("walletconnect");
    }
  };

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Preloader>
          <Switch>
            {routes.map((route: RouteProps, index: number) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Preloader>
      </BrowserRouter>
    </>
  );
};

export default App;
