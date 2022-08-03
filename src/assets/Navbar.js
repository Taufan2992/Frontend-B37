import React from "react";
import logo from "./image/Header.png"

function Navbar() {
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} width="75" height="75" alt="" />
            </a>

            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-light text-danger px-4 me-2 border-danger fw-bold"
                >
                  Login
                </button>
                <button
                  type="button"
                  class="btn btn-danger me-3 fw-bold"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
