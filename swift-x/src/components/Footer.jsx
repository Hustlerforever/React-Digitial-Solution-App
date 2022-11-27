import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/App.scss";

export default function Footer() {
  return (
    <MDBFooter
      
      className="text-center text-lg-start text-muted  "
    >
      <section className="promo-banner d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-4 mb-4">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-3 text-reset">
            <MDBIcon color="primary" fab icon="facebook-f" size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="footer  p-1">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4">
               
                SwiftX
              </h6>
              <p>
                Accelerate innovation with world-class tech teams. We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Data Security
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  IT Management
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Outsourcing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Networking
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="primary" icon="home" className="me-2" />
                IT Park Hinjewadi, Pune(MH)
              </p>
              <p>
                <MDBIcon color="primary" icon="envelope" className="me-3" />
                swiftxsolutions@info.com
              </p>
              <p>
                <MDBIcon color="primary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="primary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 footer bold"
       
      >
        © 2022 Copyright:
        <a className="text-reset " href="#">
          SwiftX Solutions
        </a>
      </div>
    </MDBFooter>
  );
}
