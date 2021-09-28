import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="container mt-1 mb-1">
          <div className="row justify-content-center">
            <div className="col">
              <ul class="nav justify-content-center bg-primary">
                <li class="nav-item ">
                  <a class="nav-link  " aria-current="page" href="/">
                    Student Area
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Library
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Gallary
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/">
                    Contact Us
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
      </nav>
    </div>
  );
};

export default Header;
