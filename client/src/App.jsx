import LoginForm from "./components/loginform/LoginForm";

import RegisterForm from "./components/registerform/RegisterForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>

  );
}

export default App;
