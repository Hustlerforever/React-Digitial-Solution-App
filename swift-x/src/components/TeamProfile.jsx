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
import {
  FaTwitter as TwitterIcon,
  FaLinkedinIn as LinkedinIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

function TeamProfile() {
  const heading = "Meet these fine folks";
  const subheading = "Our Team";
  const description =
    "There is an obsessive need to see these faces! We have the guys who offer an outstanding solution for every problem!";

  const cards = [
      {
        imageSrc: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "CEO",
        name: "Mike Ross",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
        position: "CTO",
        name: "Jessica Pearson",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwaW4lMjBzdWl0JTIwaW5kaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
        position: "PR Manager",
        name: "Sabastian Ode",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Project Manager",
        name: "Himali Turn",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
        position: "Sr. Developer",
        name: "Troye Sivan",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
        position: "Quality Assurance",
        name: "Holo Wo",
        links: [
          {
            url: "https://twitter.com",
            // icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            // icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            // icon: GithubIcon,
          },
        ],
      },
    ]

  return (
    <>
      <MDBRow className="d-flex justify-content-center align-items-center text-center">
        <div className="w-50 mt-3 mb-3 pt-5">
          <MDBTypography tag="div" className="display-4 ">
            <legend className="text-center">{subheading}</legend>

            {heading}
            <p className="fs-5">{description}</p>
          </MDBTypography>
        </div>
      </MDBRow>
      <MDBRow className="mt-5 mb-5 d-flex justify-content-center">
        {cards.map((index)=>{
        
          return(
          <MDBCol sm={3}>
          <MDBCard className="shadow-0 ">
          
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={index.imageSrc}
                fluid
                alt="..."
                className="rounded h-50"
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="text-center">
              <MDBCardTitle className="text-secondary fw-bolder">
                <p>{index.name}</p>
              </MDBCardTitle>
              <MDBCardText>{index.position}</MDBCardText>
              <div className="d-flex justify-content-evenly">
                
                <>
                <a  href="" className="stretched-link">
                  <TwitterIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  <LinkedinIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  {" "}
                  <GithubIcon size={30} />
                </a>
                </>
                
                

                
                
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>)




        })}
        {/* <MDBCol sm="3">
          <MDBCard className="shadow-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
                className="rounded"
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="text-center">
              <MDBCardTitle className="text-secondary fw-bolder">
                <p>Mark Chapman</p>
              </MDBCardTitle>
              <MDBCardText>Lead Developer</MDBCardText>
              <div className="d-flex justify-content-evenly">
                <a href="#" className="stretched-link">
                  <TwitterIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  <LinkedinIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  {" "}
                  <GithubIcon size={30} />
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="3">
          <MDBCard className="shadow-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
                className="rounded"
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="text-center">
              <MDBCardTitle className="text-secondary fw-bolder">
                <p>Mark Chapman</p>
              </MDBCardTitle>
              <MDBCardText>Lead Developer</MDBCardText>
              <div className="d-flex justify-content-evenly">
                <a href="#" className="stretched-link">
                  <TwitterIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  <LinkedinIcon size={30} />
                </a>
                <a href="#" className="stretched-link">
                  {" "}
                  <GithubIcon size={30} />
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
      </MDBRow>
    </>
  );
}

export default TeamProfile;
