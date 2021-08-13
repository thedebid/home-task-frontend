import react from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

function Nav() {
  let history = useHistory();
  const onLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a> */}
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                {localStorage.getItem("isLoggedIn") ? (
                  <>
                    <li className="nav-item">
                      <Link to="/addProduct" className="nav-link">
                        Add New Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/viewProduct" className="nav-link">
                        View Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-danger" onClick={onLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export const NavBar = withRouter(Nav);
