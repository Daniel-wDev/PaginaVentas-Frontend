import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserPage } from './pages/UserPage';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dashboard';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/Users" element={<UserPage />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
