/* Import Styles */
import "../../styles.css";
import "./landing.css";
import "./mobilelanding.css"

/* Import Icons */
import {SuccessIcon} from "../../assets/landing/success";
import {MailIcon} from "../../assets/landing/mail";

/* Import Files */
import LandingText from "./landing-text/landingtext"
import Testimonial from "./testimonial/testimonial";
import HeroProfile from "./hero/profile/profile";
import HeroFinance from "./hero/finance/finance";
import HeroInvoice from "./hero/invoice/invoice";
import HeroHistory from "./hero/history/history";

/* Code */
export default function Landing() {
    return (
        <div className="Landing">
            <div className="LandingHeadline">
                {/* Landing Headers */}
                <div className="LandingHeadlineText">
                    <LandingText />
                    <Testimonial />
                </div>

                {/* Hero Content */}
                <div className="HeroBackdrop HeroAnimation"
                     id="HeroBackdrop">

                    {/* Hero Profile Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroProfile"
                         style={{marginTop: "-4vh", minHeight: "144px", maxHeight: "160px"}}>
                        <HeroProfile />
                    </div>

                    {/* Hero Finance Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroFinance"
                         style={{height: "12vh", minHeight: "104px"}}>
                        <HeroFinance/>
                    </div>

                    {/* Hero Invoice Paid Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroInvoicePaid"
                         style={{height: "11vw", minHeight: "151px"}}>
                        <HeroInvoice />
                    </div>

                    {/* Hero Payment History Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroPaymentHistory"
                         style={{height: "15vw", minHeight: "205px", maxHeight: "210px", marginBottom: "-4vh"}}>
                        <HeroHistory />
                    </div>

                </div>
            </div>
        </div>
    );
}
