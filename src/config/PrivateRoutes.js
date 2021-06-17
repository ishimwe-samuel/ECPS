import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "./axios";
import { load_user } from "../actions/auth";
import { useDispatch } from "react-redux";
function PrivateRoute({ component: Component, history, user, ...rest }) {
  const [isTokenValid, setIsTokenValid] = useState(true);
  const dispatch = useDispatch();
  const data = {
    data: JSON.stringify({ token: localStorage.getItem("access") }),
  };
  axios
    .post("/auth/jwt/verify", data.data)
    .then(function (response) {
      if (response.data.message === "Unautorized") {
        setIsTokenValid(false);
      }
    })
    .catch((exception) => {
      if (exception.name === "NetworkError") {
        alert("Please make sure you are connected");
      } else if (
        exception.response.status === 401 ||
        exception.response.status === 400
      ) {
        setIsTokenValid(false);
        localStorage.removeItem("access");
      } else {
        // history.push('/auth/login');
        window.location.reload();
      }
    });
  if (user == null) {
    dispatch(load_user());
  }
  return (
    <div>
      {isTokenValid ? (
        <Route
          path
          {...rest}
          render={(props) =>
            true ? <Component {...props} /> : <Redirect to="/auth" />
          }
        />
      ) : (
        (window.location.pathname =
          "/auth" || localStorage.removeItem("access"))
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(PrivateRoute);
