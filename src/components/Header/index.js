import React from 'react';
import Logo from "../../assets/images/logo.png";
import LogoText from "../../assets/images/logo_text.png";
import './headerStyle.css';

export function Header(props) {
  return (
    <header>
      <div className="media_menu container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-start">
            <div className="logo">
              <div>
                <img src={Logo} />
                <img src={LogoText} />
              </div>
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-end">
            <div className="head-btn-get-app">
              <button className="btn btn-primary text-uppercase" type="submit">Get the app</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header
