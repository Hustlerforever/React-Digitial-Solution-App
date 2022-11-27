import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";
import serviceImg from "../assets/services.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import MainImg from "./MainImg";

export default function Services() {
  return (
    <MDBContainer>
      <MDBRow sm="12">
       <MainImg src={serviceImg}/>
      </MDBRow>
      <MDBRow
        sm="12"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-50 mt-5 mb-5 pt-5">
        <MDBTypography tag="div" className="display-4 ">
          We run all kinds of <span className="text-secondary">IT Services</span>{" "}
          that vow your success
        </MDBTypography>
        </div>
        
      </MDBRow>
      <MDBRow className="mt-5">
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card1} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Analytics</MDBCardTitle>
              <MDBCardText>
                Create Intelligent Workflows & Uncover Business Insights with
                Analytics services Consulting. Analytics unlocks the hidden
                potential.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card2} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Digital marketing</MDBCardTitle>
              <MDBCardText>
                Take your business to a new level and add SwiftX to your
                marketing plan. See our features. Advertise your business
                directly to an engaged audience.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card3} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Data Protection</MDBCardTitle>
              <MDBCardText>
                Get Ransomware Protection and Disaster Recovery with Agile Cloud
                Backup & Recovery. Explore Industry-Leading Cloud-Based Data
                Protection
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-5 mb-5">
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card4} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Resource Optimization</MDBCardTitle>
              <MDBCardText>
                Get detailed view of processes such as planning, forecasting,
                allocating, and scheduling available resources and utilizing
                them intelligently to meet your organization’s objectives
                without overloading budget.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card5} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>SEO Optimization</MDBCardTitle>
              <MDBCardText>
                Get Dedicated SEO Manager, Content Optimisation, Link Building,
                Analytics Tracking & More! Dedicated Project Coordinator,
                In-Depth Reports & Reviews to Keep Your SEO Service Running.
                Page Content Optimisation.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center">
              <img src={card6} alt="Item1" className="img-fluid " />
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Email Marketing</MDBCardTitle>
              <MDBCardText>
                Drive more site traffic and sales with email automations. Boost
                customer engagement and loyalty by focusing on the right people
                with our segmentation tools and sending the right message with
                automations.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
