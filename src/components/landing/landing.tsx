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
                <div>
                    <div>
                        <h1 className={"LandingHeader"}> Next-gen communication <br /> tools modern business </h1>
                        <p className={"LandingText"}> Learn more about how we can bring your supplychain into the 21st
                                                      century. </p>
                    </div>

                    {/* Landing Buttons */}
                    <div className="LandingButtons">
                        <button className={"LandingPrimaryButton"}>
                            <p className={"LandingPrimaryButtonText"}>Get Access</p>
                        </button>
                        <button className={"LandingSecondaryButton"}>
                            <p className={"LandingSecondaryButtonText"}>View Features</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
