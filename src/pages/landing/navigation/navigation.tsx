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
                <p className="LandingNavigationLink">Home</p>
                <p className="LandingNavigationLink">Features</p>
                <p className="LandingNavigationLink">Pricing</p>
                <p className="LandingNavigationLink">About</p>
                <p className="LandingNavigationButton">Sign Up</p>
            </div>
        </div>
    );
}