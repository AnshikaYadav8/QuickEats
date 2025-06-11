import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center py-3 mt-5 border-top">
      <div className="d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            {/* Replace with an actual icon */}
          </svg>
        </Link>
        <span className="text-muted">© 2024 Quick Eats, Inc</span>
      </div>

      <ul className="nav justify-content-center list-unstyled d-flex mt-2">
        <li className="ms-3">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
