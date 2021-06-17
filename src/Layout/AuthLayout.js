import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes } from "../routes";
const AuthLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      {/* Root element for center items  */}
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Auth Card Container  */}
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          {/* Auth Card  */}
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <Switch>
              {getRoutes(authRoutes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthLayout;
