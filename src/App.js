import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components";
import { Bookmark, Explore, Home, Profile } from "./pages";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/bookmark" element={<Bookmark />}/>
        <Route path="/profile" element={<Profile />}/>       
      </Routes>
    </div>
  );
}

export default App;
