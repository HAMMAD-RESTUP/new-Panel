import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screens/admin";
import Student from "../screens/Student";
import Login from "../screens/login";
import Home from "../screens/home";
import SignUp from "../screens/signup"
import Protected from "../screens/protected";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin" element={<Protected Screen={Admin} /> } />
        <Route path="student" element={<Student />} />
        <Route path="home" element={<Protected Screen={Home} />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}