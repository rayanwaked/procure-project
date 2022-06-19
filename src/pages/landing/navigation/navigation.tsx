/* Import Styles */
import "../../../styles.css";
import "./navigation.css";

/* Import Files */

/* Code */
export default function LandingNavigation() {
    return (
        <div className="LandingNavigation">
            <p className="LandingNavigationLink">Home</p>
            <p className="LandingNavigationLink">Features</p>
            <p className="LandingNavigationLink">Pricing</p>
            <p className="LandingNavigationLink">About</p>
            <p className="LandingNavigationButton">Sign Up</p>
        </div>
    );
}