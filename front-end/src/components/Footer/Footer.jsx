import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            repellat debitis voluptatum in facere enim maiores odit. Officiis,
            inventore eveniet placeat nam, est dolorum aperiam dolores porro
            ducimus reprehenderit molestiae?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center"></div>
        <div className="footer-content-right"></div>
      </div>
    </div>
  );
};

export default Footer;
