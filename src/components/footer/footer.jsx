import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="colomn-1">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="colomn-2">
                <h4>View Website in</h4>
                <p>English</p>

            </div>
            <div className="colomn-3">
                <h4>Need Help?</h4>
                <p>Visit Help Center</p>
                <p>Share Feedback</p>
            </div>
            <div className="colomn-4">
                <h4>Connect With Us</h4>
                <div className="logos">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: "#fcfcfd" }} className="connect-logo" />
                <FontAwesomeIcon icon={faXTwitter} style={{ color: "#fcfcfd" }} className="connect-logo"/>
                </div>
                <div className="logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" />
                <img src="https://developer.apple.com/news/images/download-on-the-app-store-badge.png" alt="" />
                </div>
                
            </div>
        </div>

        
        </>
    )
}

export default Footer;