import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components";
import { Bookmark, Explore, Home, Profile, Login, SignUp} from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/bookmark" element={<Bookmark />}/>
        <Route path="/profile" element={<Profile />}/>       
      </Routes>
    </div>
  );
}

export default App;
