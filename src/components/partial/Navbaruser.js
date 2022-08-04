import React from "react";
import logo from "../../assets/image/Header.png";
import blank from "../../assets/image/blank-profile.png";
import cart from "../../assets/image/keranjang.png";
import profile from "../../assets/image/user.png";
import logout from "../../assets/image/logout.png";

function Navbaruser() {
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} width="75" height="75" alt="" />
            </a>

            <div class="d-flex align-items-center">
              <div class="justify-content-end d-flex me-2">
                <a href="#" style={{ textDecoration: "none", position:"relative"}}>
                  <img
                    src={cart}
                    alt=""
                    className="me-3 mt-2 my-auto position-relative"
                    height="30px"
                    width="30px"
                  />
                  <span class="badge rounded-pill bg-danger" style={{position:"absolute", top:"0", right:"0px"}}>
                    0
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </a>
              </div>

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
                        <img src={profile} alt="" height="20px" width="20px" />{" "}
                        Profile
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <img src={logout} alt="" height="20px" width="20px" />{" "}
                        Log out
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

export default Navbaruser;
