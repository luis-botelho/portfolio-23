import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        <h4>
          Hello <span className="green">I'am</span>
        </h4>
        <h1 className="green">Luis Botelho</h1>
        <h3>Fullstack Developer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          amet ducimus eius nulla, explicabo, omnis labore necessitatibus
          laudantium, quibusdam ab quasi tempore at eaque earum id quo eos culpa
          optio?
        </p>
        <button>Let's talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="#">
                <FaGithub />
              </a>
            </span>
            <span>
              <a href="#">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="#">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
      <Profile>
        <img
          src="https://lh3.googleusercontent.com/AuLBwayXW33tSEQ7FOKNIEc3f5wQgHryXkHdUqrzw6UX2hO_q7zUcrE70XXgBBjyBMKILWUiENkJNElRIwD2YbGhoxOUAjpvKULc_ATUc_LkgZGcaQzkaTTrNJEtblyN2AR_eP-nONl8gcE7BxjIpJN55ZWfg9mCbbiZDD0tWvIkwXqkmpUJTCaRWShDRqzfdwFQdOIqFB5SlfFu2TYLK3XNABq1TIv4XkqJxPDpLu6zgTLXZdn8R7TCpCXuVCge9H4d9pULHjFI3SyCOZFsGV7ghJciuhnKwtSofIZh7HpGX1TJcrp_ROXjL6hgs3R7CxdkClNNFGrX7EsFFgyYCVdd9AUtGJOFMrw1gcw2ZBtbHtKpefyVq3rYtMh08UGjkT8--Ic_VKxoffoULM_TjzhQbo7H-sSseb80aDn4oqalT6kQEYsGEYSJJgkd4vDHg00feV0yB4tvZgcysQSj3mUFY1R22Jv0IIg13iIzpVuM_sKuDr2G_9q3FTdYNPaUX9UgxKJSL4W0RfzSVKPtvKa82YJ2UDD8iDmhWhtJBB3qDpNS3QWV-1jOvEYZLURZug7WyKDh4c_S64zAPMk6X8O7bzhDDF0wSuJXWXhRmpMonAgFqnqTeoZqpGenrwKw9kD-_sNY6aBMGz1cuSIG1TYV9AaiYoUazbIgP67VxCj2S2sOsFLJ29u3MRu8kfvUDnkkh5CkI3-QQdZDDsLCVvhaSn75CfoGQgquN90FjmvLp5UuRA_wkznCMWgm_KRFmQrknioM0vRntePct3F5F9-YRxxifSDzp7jqIS7s0NAwd-uVO_Ro1h3DlDKl6K2cFFIO_LU8xMaBpywrJlz-DCIO2bjE3NvMPXuZG9she3f9SBVl4zuJo2oDstop2ludmY-Fq3P35fYmixIFUuB8Hd96NXwV5DMzZUEY_laKIaibew=w516-h696-s-no?authuser=0"
          alt="me"
        />
      </Profile>
    </Container>
  );
};

export default ProfComponent;

// structure
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
  }

  .social-icons {
    display: flex;
    align-items: center;
    span {
      margin: 0.5rem;
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  filter: drop-shadow(0px 10px 10px #01be9570);
  img {
    width: 25rem;
    transition: transform 400ms ease-in-out;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);


}
  :hover {
    transform: translateY(-10px);
  }
`;
//
