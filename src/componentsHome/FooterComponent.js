import './FooterComponent.css'
import Email from "../asset/svg/Email.js";
import Mobile from "../asset/svg/Mobile.js";
import Location from "../asset/svg/Location.js";


export default function Footer() {



  return (
    <section className="footer">
      <div className="footer-locations">
        <h3>Locations</h3>
        <ul>
          <li><Location className="footer-icons"/>Pune</li>
          <li><Location className="footer-icons"/>Hyderabad</li>
          <li><Location className="footer-icons"/>Nagpur</li>
          <li><Location className="footer-icons"/>Mumbai</li>
        </ul>
      </div>
      <div className="about-us-footer">
        <h3>About Us</h3>
        <ul>
          <li><a href="/about-us">About LenDen</a></li>
          <li><a href="">Help</a></li>
          <li><a href="/feedback">Feedback</a></li><br />
          <li><a href="#navbar-id" id='move-top'>Move to Top</a></li>
        </ul>
      </div>
      <div className="contact-us-footer">
        <h3>Contact Us</h3>
        <p><Email className="footer-icons"/>support@lenden.com</p>
        <p><Mobile className="footer-icons"/>8669559791</p>
        <div className="services">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>News</p>
        </div>
      </div>
    </section>
  );
}
