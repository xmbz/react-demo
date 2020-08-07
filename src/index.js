import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

import configureStore from "./redux"; // 引入redux

// React-Redux 提供<Provider/>组件，能够使你的整个app访问到Redux store中的数据：
import { Provider } from "react-redux";

const store = configureStore();
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Route path={`/`} component={App}></Route>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
