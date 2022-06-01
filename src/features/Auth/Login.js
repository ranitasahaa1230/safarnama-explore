import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { loginUser } from "./authSlice";
import { useDocumentTitle, useToast } from "../../hooks";
import "./Auth.css";

export function Login() {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showToast } = useToast();
  useDocumentTitle("Login");

  const handleFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(loginUser(loginForm));
      if (response?.error) {
        throw new Error(error);
      }
      if (token) {
        showToast("Logged In Successfully!", "success");
        navigate(location.state?.from?.pathname ?? "/feed", { replace: true });
      }
    } catch (error) {
      showToast("Can't login. Recheck details and try again!", "error");
      setError("Username or password is incorrect");
    }
  };

  function loginHandler() {
    setLoginForm({ username: "ranitaasaha", password: "ranitasaha@123" });
  }

  return (
    <div className="app__container" id="box-btn">
      <div className="form-box box-btn">
        <div className="button-box">
          <div id="btns"></div>
          <h3 className="toggle-btn">LOGIN</h3>
        </div>
        <form className="input-group login" onSubmit={handleFormHandler}>
          <label className="password-label" htmlFor="mail">
            Username
          </label>
          <input
            type="text"
            id="inputbox"
            className="input-fields"
            placeholder="test@gmail.com"
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm((form) => ({ ...form, username: e.target.value }))
            }
            required
          />
          <label className="password-label">Password</label>
          <div className="visibility">
            <input
              type={showPassword ? "text" : "password"}
              className="visibility-fields"
              placeholder="test1234"
              autoComplete="off"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((form) => ({
                  ...form,
                  password: e.target.value,
                }))
              }
              required
            />
            {
              <span
                className="visibility-icon"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </span>
            }
          </div>
          <div>
            <div className="checkbox-block">
              <input type="checkbox" className="check-box" />
              <span className="check-psswd">Remember Me</span>
              <Link to="/">
                <span
                  className="forget-psswd"
                  onClick={() => navigate("/forgetPwd")}
                >
                  Forgot Your Password?
                </span>
              </Link>
            </div>
            <button
              type="submit"
              className="submit-loginbtns"
              onClick={() => {
                loginHandler();
              }}
            >
              Login with Test Credentials
            </button>
            <button type="submit" className="submit-loginbtn">
              Login
            </button>

            {error && (
              <div className="login-error-msg">
                <i className="fa-solid fa-square-xmark"></i>
                <p>{error}</p>
              </div>
            )} 

            <div className="input-account">
              Not a user yet?
              <Link to="/signup" className="primary-account">
                Create your account
              </Link>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}