/* Import Styles */
import "../../../styles.css";
import "./navigation.css";

/* Import Files */

/* Code */
export default function LandingNavigation() {
    return (
        <div className="LandingNavigation">
            <div className="LandingNavigationLogos">
                <p className="LandingNavigationLogo">PROCURE</p>
            </div>
            <div className="LandingNavigationLinks LandingNavigationNoMobile">
                <a href=""><p className="LandingNavigationLink">Home</p></a>
                <a href=""><p className="LandingNavigationLink">Features</p></a>
                <a href=""><p className="LandingNavigationLink">Pricing</p></a>
                <a href=""><p className="LandingNavigationLink">About</p></a>
                <a href=""><p className="LandingNavigationButton">Sign Up</p></a>
            </div>
        </div>
    );
}