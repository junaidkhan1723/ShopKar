import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-toastify";

function Nav({ cart }) {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar collapse on route change
  useEffect(() => {
    const collapse = document.querySelector(".navbar-collapse");
    if (collapse?.classList.contains("show")) {
      collapse.classList.remove("show");
    }
    setIsNavOpen(false); // reset animation state
  }, [location]);

  const handleLoginClick = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setIsSignup(false);
    setFormData({ name: "", email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && (isSignup ? formData.name : true)) {
      setUser({
        name: isSignup ? formData.name : formData.email.split("@")[0],
        email: formData.email,
      });
      handleCloseModal();
      toast.success("Logged in successfully!");
    }
  };

  const userInitial = user?.name.charAt(0).toUpperCase();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg shadow navbar-light bg-light fixed-top transition-navbar ${
          isNavbarHidden ? "hide-navbar" : ""
        }`}
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            Shop<span className="text-warning">Kar</span>
          </Link>

          <button
            className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation"
          >
            <div className="animated-toggler">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Features">Features</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              {user ? (
                <div className="dropdown ">
                  <button
                    className="btn btn-outline-secondary rounded-circle"
                    data-bs-toggle="dropdown"
                  >
                    {userInitial}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                    <li className="dropdown-item"><strong>Name:</strong> {user.name}</li>
                    <li className="dropdown-item"><strong>Email:</strong> {user.email}</li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={() => setUser(null)}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <button className="btn btn-outline-primary" onClick={handleLoginClick}>
                  <i className="bi bi-person-circle"></i>
                </button>
              )}

              <Link to="/Carts" className="btn btn-outline-success position-relative">
                <i className="bi bi-cart"></i>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Login/Signup */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title">{isSignup ? "Sign Up" : "Login"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {isSignup && (
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  )}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    {isSignup ? "Sign Up" : "Login"}
                  </button>
                </form>
              </div>
              <div className="modal-footer border-0 text-center">
                <small>
                  {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                  <button className="btn btn-link p-0" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Login" : "Sign Up"}
                  </button>
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
