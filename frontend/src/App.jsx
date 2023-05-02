import './App.css';
import { Outlet } from "react-router-dom";
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
