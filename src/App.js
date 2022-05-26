import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div classNameName="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        
      </Routes>
    </div>
  );
}

export default App;
