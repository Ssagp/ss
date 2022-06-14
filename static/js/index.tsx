import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import bsc, { UseWalletProvider } from "bscuw";

import { isTestNet } from "./blockchain/utils/index";

const bscUrl = isTestNet
  ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
  : "https://bsc-dataseed1.defibit.io/";
const bscChainId = isTestNet ? 97 : 56;

render(
  <React.StrictMode>
    <UseWalletProvider
      chainId={bscChainId}
      connectors={{
        bsc: { ...bsc, URL: bscUrl },
        walletconnect: {
          rpcUrl: bscUrl,
        },
      }}
    >
      <App />
    </UseWalletProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
