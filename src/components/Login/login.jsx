import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import httpClient from "./../../utils/httpClient";
import { toast } from "material-react-toastify";

function Login() {
  let history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(login);
    httpClient
      .POST("auth/login", login, false)
      .then((response) => {
        // console.log(response.data);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.result.token);
        localStorage.setItem("user", JSON.stringify(response.data.result.user));
        localStorage.setItem("isLoggedIn", true);
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        //   toast("Sdvsd");
      });
  };

  return (
    <>
      <div className="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required="required"
              name="email"
              onChange={handleChange}
              value={login.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              onChange={handleChange}
              value={login.password}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              Log in
            </button>
          </div>
          <div className="clearfix">
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center">
          <Link to="/register">Create an account </Link>
        </p>
      </div>
    </>
  );
}
export default Login;
