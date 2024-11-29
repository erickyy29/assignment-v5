import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView.jsx";
import SignInView from "./views/SignInView.jsx";
import SignUpView from "./views/SignUpView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/signup" element={<SignUpView />} />
      </Routes>
    </Router>
  );
}

export default App;
