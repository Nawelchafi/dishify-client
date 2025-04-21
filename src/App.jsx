import './App.css';
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RecipiesPage from "./pages/RecipiesPage/RecipiesPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LogInPage from './pages/LogInPage/LogInPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipies" element={<RecipiesPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
