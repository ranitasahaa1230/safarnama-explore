import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDocumentTitle, useToast } from "../../hooks";
import { signUpUser } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Auth.css";

export function SignUp() {
  const { token } = useSelector((state) => state.auth);
  const [signUpForm, setsignUpForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  useDocumentTitle("SignUp");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  let from = location.state?.from?.pathname ?? "/login";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(signUpUser(signUpForm));
      if (response?.error) {
        throw new Error(error);
      }
      if (token) {
        showToast("Account Created Successfully !", "success");
        navigate(from, { replace: true });
      }
    } catch (error) {
      showToast(
        "Can't SignUp the user. Recheck details and try again!",
        "error"
      );
      setError("Passwords do not match");
    }
  };

  return (
    <main>
    <div className="app__container" id="box-signup">
      <div className="form-box box-signup">
        <div className="button-box">
          <h3 className="toggle-btn">SIGN UP</h3>
        </div>
        <form className="input-group" onSubmit={handleFormSubmit}>
          <label htmlFor="firstname" className="password-label">
            First Name
          </label>
          <input
            type="text"
            className="input-fields"
            placeholder="First Name"
            value={signUpForm.firstName}
            onChange={(e) =>
              setsignUpForm((form) => ({ ...form, firstName: e.target.value }))
            }
            required
          />
          <label htmlFor="lastname" className="password-label">
            Last Name
          </label>
          <input
            type="text"
            className="input-fields"
            placeholder="Last Name"
            value={signUpForm.lastName}
            onChange={(e) =>
              setsignUpForm((form) => ({ ...form, lastName: e.target.value }))
            }
            required
          />
          <label htmlFor="username" className="password-label">
            Username
          </label>
          <input
            type="username"
            className="input-fields"
            placeholder="Enter Your Username"
            value={signUpForm.username}
            onChange={(e) =>
              setsignUpForm((form) => ({ ...form, username: e.target.value }))
            }
            required
          />
          <label htmlFor="pwd" className="password-label">
            Password
          </label>
          <div className="visibility">
            <input
              type={showPassword ? "text" : "password"}
              className="visibility-fields"
              placeholder="Enter Password"
              value={signUpForm.password}
              onChange={(e) =>
                setsignUpForm((form) => ({ ...form, password: e.target.value }))
              }
              autoComplete="off"
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

          <label htmlFor="pwd" className="password-label">
            Confirm Password
          </label>
          <div className="visibility">
            <input
              type={showPassword ? "text" : "password"}
              className="visibility-fields"
              placeholder="Enter Confirm Password"
              value={signUpForm.confirmPassword}
              onChange={(e) =>
                setsignUpForm((form) => ({
                  ...form,
                  confirmPassword: e.target.value,
                }))
              }
              autoComplete="off"
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

          <div className="checkbox-block">
            <input type="checkbox" className="check-box" />
            <span className="check-psswd">
              I agree to all terms and conditions
            </span>
          </div>
          <button
            type="submit"
            className="submit-loginbtns"
            disabled={signUpForm.password !== signUpForm.confirmPassword}
          >
            REGISTER
          </button>

          {error && (
            <div className="login-error-msg">
              <i className="fa-solid fa-square-xmark"></i>
              <p>{error}</p>
            </div>
          )}

          {signUpForm.password !== signUpForm.confirmPassword && (
            <div className="login-error-msg">
              <i className="fa-solid fa-square-xmark"></i>
              <p>Passwords don't match</p>
            </div>
          )}

          <div className="input-account">
            Already registered?
            <Link to="/login" className="primary-account">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
}
