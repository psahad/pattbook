import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from './components';
import useSettings from "./hooks/useSettings";
import './pages/pages.css';
import './App.css';

function App() {
  useSettings()
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/list")
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div className="App">
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
