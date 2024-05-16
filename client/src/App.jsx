import Layout from "./components/Layout/Layout";
import LoginForm from "./components/loginform/LoginForm";
import RegisterForm from "./components/registerform/RegisterForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AfterRegister from "./components/afterRegister/AfterRegister.jsx";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AfterRegisterRoute from "./components/AfterRegisterRoute";
import Balance from "./components/Balance/Balance.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout isAuthenticated={true} />}>
        <Route
          index
          element={<PrivateRoute Component={<LoginForm />} redirecTo="/home" />}
        />

        <Route
          path="register"
          element={
            <AfterRegisterRoute
              Component={<RegisterForm />}
              redirecTo="/afterregister"
            />
          }
        />
        <Route
          path="home"
          element={<ProtectedRoute Component={<Home />} redirecTo="/" />}
        />
        <Route
          path="afterregister"
          element={
            <ProtectedRoute
              Component={<AfterRegister />}
              redirecTo="/register"
            />
          }
        />
        <Route path="balance" element={<Balance />} />
      </Route>
    </Routes>
  );
}

export default App;
