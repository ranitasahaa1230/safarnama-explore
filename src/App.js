import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Toast } from "./components";
import {
  Bookmark,
  Explore,
  Home,
  Profile,
  Login,
  SignUp,
  LandingPage,
} from "./features";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toast/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
