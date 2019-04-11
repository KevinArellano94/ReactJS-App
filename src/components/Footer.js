import React from "react";
import "../App.css";

function Footer(props) {
  return (
    <div className="container">
      <div className="site-footer">
        <div className="row">
          {/* About */}
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>T-Rex Scans.</p>
          </div>
          {/* About Ends */}

          {/* Catefories */}
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="https://google.com">Google</a>
              </li>
            </ul>
          </div>
          {/* Catefories Ends */}

          {/* Quick Links */}
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
              </li>
            </ul>
          </div>
          {/* Quick Links Ends */}
        </div>
        {/* Bottom Line */}
        <hr />

        <div className="container">
          <div className="row">
            {/* Copy Right */}
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                © 2019 Copyright. All Rights Reserved.
              </p>
            </div>
            {/* Copy Right Ends */}

            {/* Social Media Links */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="behance"
                    href="https://www.behance.net/trexscans2139"
                  >
                    <i className="fa fa-behance" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="https://dribbble.com/trexscans">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/rexscans"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.instagram.com/trexscans/"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/t-rex-scans-bbb915181/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    className="pinterest"
                    href="https://www.pinterest.ca/Trexscanlations/"
                  >
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a
                    className="pixiv"
                    href="https://www.pixiv.net/member.php?id=36961258"
                  >
                    <i className="fa fa-pixiv" />
                  </a>
                </li>
                <li>
                  <a
                    className="reddit"
                    href="https://www.reddit.com/user/trexscans"
                  >
                    <i className="fa fa-reddit" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com/scans_t">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Media Links Ends */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
