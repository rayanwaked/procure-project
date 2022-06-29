/* Import Styles */
import "../../../styles.css";
import "./getting-started.css";

/* Import Files */
/* Import Icons */
import {MouseIcon} from "../../../assets/landing/mouse";
import {ApiIcon} from "../../../assets/landing/api";
import {DashboardIcon} from "../../../assets/landing/dashboard"

/* Code */
export default function GettingStarted() {
    return (
        <div className="GettingStartedContainer">
            <p className="LandingGettingStartedSubHeadline">START IN SECONDS</p>
            <p className="LandingGettingStartedHeadline">Get started in three easy steps</p>
            <div className="LandingGettingStarted">
                <div className={"LandingGettingStartedBox"}>
                    <MouseIcon />
                    <p className="LandingStepContainer">Step 1</p>
                    <p className="LandingFooterLink">Easy sign up</p>
                </div>
                <div className={"LandingGettingStartedBox"}>
                    <ApiIcon />
                    <p className="LandingStepContainer">Step 2</p>
                    <p className="LandingFooterLink">Invite vendors</p>
                </div>
                <div className={"LandingGettingStartedBox"}>
                    <DashboardIcon />
                    <p className="LandingStepContainer">Step 3</p>
                    <p className="LandingFooterLink">Starting using procure</p>
                </div>
            </div>
        </div>
    );
}