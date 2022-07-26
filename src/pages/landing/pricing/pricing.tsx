/* Import Styles */
import "../../../styles.css";
import "./pricing.css";

/* Import Files */
/* Import Icons */

/* Code */
export default function Pricing() {
    return (
        <div className="GettingStartedContainer">
            <p className="LandingGettingStartedSubHeadline">SELECT YOUR PLAN</p>
            <p className="LandingGettingStartedHeadline">Pricing</p>
            <div className="LandingGettingStarted">
                <div className={"PricingGettingStartedBox"}>
                    <hr id={"pricingHR"} />
                    <div className={"PricingTextBox"}>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                        <p className="PricingText"
                           style={{color: "#494f59", textDecoration: "line-through"}}>Lorem ipsum dolor sit amet ipsum
                                                                                      dolor sit</p>
                        <p className="PricingText"
                           style={{color: "#494f59", textDecoration: "line-through"}}>Lorem ipsum dolor sit amet ipsum
                                                                                      dolor sit</p>
                    </div>
                    <a href={""}
                       className="PricingStepContainer">Choose Plan</a>
                </div>
                <div className={"PricingGettingStartedBox"}>
                    <hr id={"pricingHR"} />
                    <div className={"PricingTextBox"}>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                        <p className="PricingText"
                           style={{color: "#494f59", textDecoration: "line-through"}}>Lorem ipsum dolor sit amet ipsum
                                                                                      dolor sit</p>
                    </div>
                    <a href={""}
                       className="PricingStepContainer">Choose Plan</a>
                </div>
                <div className={"PricingGettingStartedBox"}>
                    <hr id={"pricingHR"} />
                    <div className={"PricingTextBox"}>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                        <p className="PricingText">Lorem ipsum dolor sit amet ipsum dolor sit</p>
                    </div>
                    <a href={""}
                       className="PricingStepContainer">Choose Plan</a>
                </div>
            </div>
        </div>
    );
}