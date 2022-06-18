/* Import Styles */
import "../../../styles.css";
import "./landingtext.css";

/* Import Files */
import LandingButton from "./button";

/* Code */
export default function LandingText() {
    return (
        <div className="LandingText">
            <div>
                <h1 className={"LandingHeader"}> Supply chain simplified.</h1>
                <p className={"LandingText"}> Learn more about how we can bring your supply chain into the 21st
                                              century. </p>
            </div>

            {/* Landing Buttons */}
            <div className="LandingButtons">
                <LandingButton />
            </div>
        </div>
    );
}