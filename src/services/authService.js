import axios from "axios";

export const signUpService = (firstName, lastName, username, password,confirmPassword) => {
  return axios.post("api/auth/signup", {
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
    confirmPassword:confirmPassword
  });
};

export const loginService = (username, password) => {
    return axios.post('api/auth/login',{
        username:username,
        password:password
    });
};