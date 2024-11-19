import "./footer.css";
import styles from "../../index.css";
import Logo from "../Logo/logo";
import IconInstagram from "../../images/instagram-brands-solid.svg";
import IconFacebook from "../../images/facebook-brands-solid.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="cont">
          <Logo />
          <div className="footer-links">
            <h3>Sobre Nós</h3>
            <a href="https://s554jl.csb.app/sobre">
              <p>Nosso Time</p>
            </a>
          </div>
          <div className="footer-links">
            <h3>Suporte</h3>
            <p>Contato</p>
            <p>Conversar com suporte</p>
          </div>
          <div className="footer-links">
            <h3>Nos siga</h3>
            <div>
              <img src={IconInstagram} alt="icon-instagram" />
              <img src={IconFacebook} alt="icon-facebook" />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p>Copyright@2024 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
