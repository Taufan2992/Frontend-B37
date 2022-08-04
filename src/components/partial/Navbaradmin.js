import React from "react";
import logo from "../../assets/image/Header.png";
import blank from "../../assets/image/blank-profile.png";
import cup from "../../assets/image/cup.png"
import topping from "../../assets/image/topping.png"
import logout from "../../assets/image/logout.png"


function Navbaradmin() {
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} width="75" height="75" alt="" />
            </a>

            <div class="d-flex align-items-center">

              <div
                class="justify-content-end d-flex"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        class="rounded-circle border border-danger border-2"
                        src={blank}
                        width="50"
                        height="50"
                        alt=""
                      />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        <img src={cup} alt="" height="20px" width="16px" /> Add Product
                      </a>
                      <a class="dropdown-item" href="#">
                        <img src={topping} alt="" height="20px" width="16px" /> Add Topping
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <img src={logout} alt="" height="20px" width="20px" /> Log out
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbaradmin;
