import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AuthLayout from "./Layout/AuthLayout";
import AdminLayout from "./Layout/AdminLayout";
import HrLayout from "./Layout/HrLayout";
import ShopOwnerLayout from "./Layout/ShopOwnerLayout";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {localStorage.getItem("token") ? (
          <div id="main">
            <Route
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />
            <Route path="/hr" render={(props) => <HrLayout {...props} />} />
            <Route
              path="/usershop"
              render={(props) => <ShopOwnerLayout {...props} />}
            />
          </div>
        ) : (
          <div id="login-screen">
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          </div>
        )}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
