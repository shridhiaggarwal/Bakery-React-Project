import "./footer.css";
import Images from "../../components/Images";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLogoText">
        <div className="footerLogo">
          <a href="#home">
            <img src={Images.PINK_LOGO} />
          </a>
          <h3>Bakery!</h3>
        </div>
        <div className="footerText">
          <div className="footerField">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Block B, Kamla Nagar, Delhi, India</p>
          </div>
          <div className="footerField">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>+91 9876543210</p>
          </div>
          <div className="footerField">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p>Mon-Sat: 9 A.M. - 5 P.M.</p>
          </div>
          <div className="socialIcons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footerCopyRight">
        <p>Copyright © 2023 - Developed by Shridhi</p>
      </div>
    </footer>
  );
}

export default Footer;
