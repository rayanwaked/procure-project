/* Import Styles */
import "../../styles.css";
import "./landing.css";

/* Import Files */
// @ts-ignore
import heroImage from "../../assets/landing/hero.png";

/* Code */
export default function Landing() {
    return (
        <div className="Landing">
            <div className={"LandingHeadline"}>
                {/* Landing Headers */}
                <div className="LandingHeadlineText">

                    <div>
                        <h1 className={"LandingHeader"}> Supply chain simplified.</h1>
                        <p className={"LandingText"}> Learn more about how we can bring your supply chain into the 21st
                                                      century. </p>
                    </div>

                    {/* Landing Buttons */}
                    <div className="LandingButtons">
                        <button className={"LandingPrimaryButton"}>
                            <p className={"LandingPrimaryButtonText"}>Join Waitlist</p>
                        </button>
                    </div>

                </div>

                {/* Hero Content */}
                <div className="HeroBackdrop">

                </div>

            </div>
        </div>
    );
}