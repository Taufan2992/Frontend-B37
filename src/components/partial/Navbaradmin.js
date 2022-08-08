import React, { useState, useContext} from "react";
import { UserContext } from "../../context/user-context";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/image/Header.png";
import blank from "../../assets/image/blank-profile.png";
import cup from "../../assets/image/cup.png"
import topping from "../../assets/image/topping.png"
import logout from "../../assets/image/logout.png"


function Navbaradmin() {

  const [state, dispatch] = useContext(UserContext)
  const moving = useNavigate()
  
  const moveToLogout = () => {
    dispatch({
        type:"LOGOUT"
    })
    moving("/Auth")
}

const moveToTransaction = () => {
  moving('/transaction')
}

const moveToProduct = () => {
  moving('/add-drink')
}

const moveToToping = () => {
moving('/add-toping')
}

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={moveToTransaction}>
              <img src={logo} width="75" height="75" alt="" />
            </a>

            <div className="d-flex align-items-center">

              <div
                className="justify-content-end d-flex"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="rounded-circle border border-danger border-2"
                        src={blank}
                        width="50"
                        height="50"
                        alt=""
                      />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#" onClick={moveToProduct}>
                        <img src={cup} alt="" height="20px" width="16px" /> Add Product
                      </a>
                      <a className="dropdown-item" href="#" onClick={moveToToping}>
                        <img src={topping} alt="" height="20px" width="16px" /> Add Topping
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#" onClick={moveToLogout}>
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
