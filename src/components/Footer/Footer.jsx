import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../logo/Logo";
import Container from "../../pages/client/components/Container/Container";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__body">
          <div className="footer__top">
            <div className="footer__left">
              <Logo />
            </div>
            <div className="footer__right">
              <div className="footer__columns">
                <div className="footer__column footer-column">
                  <div className="footer-column__title">Product</div>
                  <ul className="footer-column__list">
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">Features</Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Integrations
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Case studies
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__column footer-column">
                  <div className="footer-column__title">Use cases</div>
                  <ul className="footer-column__list">
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Feature requests
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Share roadmap
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Manage ideas
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__column footer-column">
                  <div className="footer-column__title">Alternatives</div>
                  <ul className="footer-column__list">
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Prony vs Uservoice
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Prony vs Aha ideas
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Prony vs Canny
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Prony vs Trello
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Prony vs Nolt
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__column footer-column">
                  <div className="footer-column__title">Company</div>
                  <ul className="footer-column__list">
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">About us</Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Why Prony?
                      </Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">Team</Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">Culture</Link>
                    </li>
                    <li className="footer-column__list-item">
                      <Link className="footer-column__list-link">
                        Manifesto
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__bottom">
        <Container>
          <div className="footer__bottom-copyright footer-copyright">
            <div className="footer-copyright__left">
              © 2020 Prony | All rights reserved
            </div>
            <div className="footer-copyright__right">
              <div className="footer-copyright__right-text">
                Privacy policy | Terms of service
              </div>
              <div className="footer-copyright__right-icons">
                <a href={"https://www.google.com.ua/?hl=ru"}>
                  <FaFacebookF />
                </a>
                <a href={"https://www.google.com.ua/?hl=ru"}>
                  <AiOutlineInstagram />
                </a>

                <a href={"https://www.google.com.ua/?hl=ru"}>
                  <IoLogoTwitter />
                </a>
                <a href={"https://www.google.com.ua/?hl=ru"}>
                  <AiFillYoutube />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
