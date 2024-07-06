import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  // const studentData = localStorage.getItem('studentData');

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("studentData");
    navigate("/login", { replace: true });
  };

  if (!userData) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/home">EduEnroll</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          EduEnroll
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {userData ? (
              <>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate('/add-students', { replace: true })}
                >
                  Add Student
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
    );
  }
};

export default Navbar;
