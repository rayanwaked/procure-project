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
        <div className="LandingGettingStarted">
            <div className={"LandingGettingStartedBox"}>
                <MouseIcon />
                <p className="LandingStepContainer">Step 1</p>
                <p className="LandingFooterLink">Easy Sign Up</p>
            </div>
            <div className={"LandingGettingStartedBox"}>
                <ApiIcon />
                <p className="LandingStepContainer">Step 2</p>
                <p className="LandingFooterLink">Invite Vendors</p>
            </div>
            <div className={"LandingGettingStartedBox"}>
                <DashboardIcon />
                <p className="LandingStepContainer">Step 3</p>
                <p className="LandingFooterLink">Starting Using Procure</p>
            </div>
        </div>
    );
}