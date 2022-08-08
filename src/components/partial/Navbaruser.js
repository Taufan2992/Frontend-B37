import React, {useContext} from "react";
import { UserContext } from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Navbar.css"

import logo from "../../assets/image/Header.png";
import blank from "../../assets/image/blank-profile.png";
import cart from "../../assets/image/keranjang.png";
import profile from "../../assets/image/user.png";
import logout from "../../assets/image/logout.png";

function Navbaruser({plusOne}) {

  const [_, dispatch] = useContext(UserContext)

  const moving = useNavigate()

  const moveToProfile = () => {
      moving('/profile')
  }

  const moveToHome = () => {
      moving('/')
  }

  const moveToCart = () => {
    moving('/mycart')
}

  const Logout = () => {
    dispatch({
        type:"LOGOUT"
    })
    moving("/Auth")
  }

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} width="75" height="75" alt="" onClick={moveToHome}/>
            </a>

            <div className="d-flex align-items-center">
              <div className="justify-content-end d-flex me-2">
                <a onClick={moveToCart} style={{ textDecoration: "none", position:"relative"}}>
                  <img
                    src={cart}
                    alt=""
                    className="me-3 mt-2 my-auto position-relative cursor-pointer"
                    height="30px"
                    width="30px"
                  />
                  <span className="badge rounded-pill bg-danger" style={{position:"absolute", top:"0", right:"0px"}}>
                  {plusOne}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </div>

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
                      <a className="dropdown-item" href="#" onClick={ moveToProfile }>
                        <img src={profile} alt="" height="20px" width="20px" />{" "}
                        Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#" onClick={Logout}>
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
