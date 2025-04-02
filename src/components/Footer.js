import { Container, Col, Row } from "react-bootstrap";
import "../css/footer.css";
import Cross from "../assets/images/1.jpeg";
import Millwood from "../assets/images/2.jpeg";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaYoutube} from "react-icons/fa";
import { SiReverbnation } from "react-icons/si";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className=" col-12 p-5 d-flex justify-content-center align-items-center">
            <img src={Cross} alt="image of a cross up on a hill" />
          </Col>
          <Col className="col-12 d-flex justify-content-center align-items-center">
            <p>Stained Red - A Millwood Church Ministry</p>
          </Col>
          <Col className="col-12 d-flex justify-content-center align-items-center">
            <a href="https://millwoodchurchrc.com/" target="_blank">
              <img src={Millwood} alt="image of a cross up on a hill" />
            </a>
          </Col>
          <Col className="col-12 p-5 d-flex justify-content-center align-items-center">
            <div>
              {/* ReverbNation Link */}
              <a
                href="https://www.reverbnation.com/stainedred7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 social-media-link">
                <SiReverbnation />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/stained_red_band/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 social-media-link">
                <FaInstagram />
              </a>

              {/* YouTube Link */}
              <a
                href="https://www.youtube.com/channel/UCPMskk1DNTb4xfx6F_xNR_A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 social-media-link">
                <FaYoutube />
              </a>

              {/* Facebook Link */}
              <a
                href="https://www.facebook.com/stainedredbandtx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 social-media-link">
                <BiLogoFacebook />
              </a>
            </div>
          </Col>
          <Col className="col-12 p-5 d-flex justify-content-center align-items-center">
            <p>Stained Red &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
