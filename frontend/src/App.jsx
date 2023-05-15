import { Outlet } from "react-router-dom";
import { Header } from './components';
import useSettings from "./hooks/useSettings";
import './pages/pages.css';
import './App.css';

function App() {
  useSettings()

  return (
    <div className="App">
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
