// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
// function Header() {
//   return (
//     <nav>

//       <main>
//
//
//         <Link to={"/services"}>Services</Link>
//         <Link to={"/#brands"}>Brands</Link>
//         <Link to={"/contact"}>Contact</Link>
//       </main>
//     </nav>

//   );
// }

// export default Header;

import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="navbar">
      <MDBNavbar expand="lg" light className="fixed-top header fw-bolder">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <div className="logo">
              <img src={logo} />
              <div className="brand">
                <p className="bold">SwiftX</p>
              </div>
            </div>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to={"/"}>Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to={"/aboutus"}>About</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to={"/services"}>Services</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to={"/#brands"}>Brands</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link to={"/contact"}>Contact</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    More
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link></MDBDropdownItem>
                    <MDBDropdownItem link>Request a call</MDBDropdownItem>
                    <MDBDropdownItem link>Pricing</MDBDropdownItem>
                    <MDBDropdownItem link>Terms and Conditions</MDBDropdownItem>
                    <MDBDropdownItem link>Privacy Policy</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
              <MDBBtn color="secondary">Search</MDBBtn>
            </form>
            <MDBNavbarItem className='mr-auto mb-2 mb-lg-0 d-flex justify-content-center'>
              <MDBNavbarLink active aria-current='page' href='#'>
              <Link to={"/login"}>Login/SignUp</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
