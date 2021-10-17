import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { isLoggedInVar } from "../../cache";
import { ERROR_INVALID_EMAIL_AND_PASSWORD } from "../../constants/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    if (email === "john@gmail.com" && password === "123456") {
      localStorage.setItem("token", {});
      isLoggedInVar(true);
      setLoginError(false);
      history.push("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <div className="centerAboutElements">
        <i className="fas fa-clipboard-check fa-3x"></i>
        <h1 className="mb-20">Login</h1>

        <h3>Email:</h3>
        <input
          type="text"
          name="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Senha:</h3>
        <input
          type="password"
          name="text"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loginError && (
        <div className="alert alert-danger">
          <h4 className="text-light text-center">
            {ERROR_INVALID_EMAIL_AND_PASSWORD}
          </h4>
        </div>
      )}
      <button
        type="submit"
        onClick={(e) => loginUser(e)}
        className="btn btn-dark-blue btn-block mt-15"
      >
        <i className="fas fa-check-circle mr-5"></i> Login
      </button>
    </div>
  );
};

export default Login;
