import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar, NotFound, Toast } from "./components";
import {
  Bookmark,
  Explore,
  Home,
  Login,
  SignUp,
  LandingPage,
  ProfilePage,
  SinglePost,
} from "./features";
import Mockman from "mockman-js";
import { useTheme } from "./features/theme-context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme ? "light__mode" : "dark__mode"}>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button
        className="button button-floating"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {" "}
        <i className="fas fa-arrow-up"></i>
      </button>
      <Footer />
    </div>
  );
}

export default App;
