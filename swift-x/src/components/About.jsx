import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FcOnlineSupport } from "react-icons/fc";
import { RiTeamLine } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import aboutusImg from "../assets/aboutus.png";
import aboutusImg2 from "../assets/aboutus2.png";
import aboutusImg3 from "../assets/aboutus3.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import MainImg from "./MainImg";
import Services from "./Services";
import TeamProfile from "./TeamProfile";

export default function About() {
  return (
    <MDBContainer>
      <MainImg className="mb-5" src={aboutusImg} />

      <MDBRow className="mt-5 mb-2 pt-5">
        <MDBCol sm="4">
          <div>
            <legend>Who we are</legend>
            <MDBTypography tag="div" className="display-6 ">
              We are a modern Consulting, Software and Hardware solution
              provider agency
            </MDBTypography>
            <Link to={"/services"}>
              <MDBBtn className="p-2 mt-3 mb-2" onClick>
                Our Services
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol sm="8">
          <MainImg src={aboutusImg2} />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-5 mb-2 pt-5">
        <MDBCol sm="8">
          <MainImg src={aboutusImg3} />
        </MDBCol>
        <MDBCol sm="4">
          <div>
            <legend>What we do</legend>
            <MDBTypography tag="div" className="display-6 ">
              We aim to disrupt the design space of the industry by our
              innovative technology
            </MDBTypography>

            <Link to={"/services"}>
              <MDBBtn className="p-2 mt-3" onClick>
                Our Services
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <div className="w-50 mt-5 mb-5 pt-5">
          <MDBTypography tag="div" className="display-4 text-center">
            <legend className="text-center">Our Values</legend>
            We follow these
          </MDBTypography>
        </div>
      </MDBRow>
      <MDBRow className="mt-5 ">
        <MDBCol sm="4">
          <MDBCard className=" shadow-3 mb-5">
            <MDBCardHeader className="text-center text-primary ">
              <FcOnlineSupport size={100} />
              <MDBCardTitle className="primary">24/7 Support</MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                24/7 support services are here to ensure our customers' success
                and business productivity – whether for on-site assistance,
                technical, or remote support.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center text-primary">
              <RiTeamLine size={100} />
              <MDBCardTitle>Strong Team</MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                No matter what kind of your work is, we always have a
                sophosticated task force ready to serve you.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="4">
          <MDBCard className=" shadow-3">
            <MDBCardHeader className="text-center text-primary ">
              <MdSentimentSatisfiedAlt size={100} />
              <MDBCardTitle>Customer Satisfaction</MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                We get closer than ever to our customers, so close so we can
                tell you what you need well before you realize it yourself. Be
                assured for the quality and reliability of our services
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      

      <TeamProfile/>

      
      


          </MDBContainer>
  );
}
