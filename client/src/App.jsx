import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

const Home = lazy(() => import("./pages/Home"));
const Reports = lazy(() => import("./pages/Reports"));
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import React from "react";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";
import AfterRegistration from "./components/AfterRegistration/AfterRegistration";
import { getUserBalance } from "./redux/transactions/operations";

const App = () => {
  const dispatch = useDispatch();
  const { user, isRefreshing } = useAuth();
  

  useEffect(() => {
   
      dispatch(refreshUser());
      dispatch(getUserBalance())
    
    
  
  }, [dispatch]);
  return (
    <>
      {isRefreshing && <div>Fetching user data</div>}
      {!isRefreshing && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <PrivateRoute component={<Home />} redirectTo="/welcome" />
                }
              />

              <Route
                path="welcome"
                element={
                  <RestrictedRoute
                    component={<AuthenticationPage />}
                    redirectTo="/"
                  />
                }
              />
              <Route path="afterregister" element={<AfterRegistration />} />

              <Route
                path="reports"
                element={
                  <PrivateRoute component={<Reports />} redirectTo="/welcome" />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
