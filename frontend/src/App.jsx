import { Outlet } from "react-router-dom";
import { Header } from './components';
import './pages/pages.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
