import Layout from "./components/Layout/Layout";
import LoginForm from "./components/loginform/LoginForm";
import RegisterForm from "./components/registerform/RegisterForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AfterRegister from "./components/afterRegister/AfterRegister.jsx";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AfterRegisterRoute from "./components/AfterRegisterRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
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
          element={<ProtectedRoute Component={<Home />} redirecTo="/login" />}
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
      </Route>
    </Routes>
  );
}

export default App;
