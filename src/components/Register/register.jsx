import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import httpClient from "./../../utils/httpClient";
import { toast } from "material-react-toastify";

function Register() {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(user);
    httpClient
      .POST("auth/register", user, false)
      .then((response) => {
        toast.success(response.data.message);
        history.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 className="text-center">Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required="required"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required="required"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div className="clearfix">
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login"> Login </Link>
        </p>
      </div>
    </>
  );
}
export default Register;
