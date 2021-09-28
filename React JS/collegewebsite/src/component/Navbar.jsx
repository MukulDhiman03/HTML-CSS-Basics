import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12">
            <ul class="nav  bg-danger justify-content-evenly">
              <li class="nav-item ">
                <a class="nav-link" aria-current="page" href="/">
                  LOGO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/">
                  ABOUT US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href="/">
                  ADMISSIONS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href="/">
                  COURSES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href="/">
                  Virtual Tour
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
