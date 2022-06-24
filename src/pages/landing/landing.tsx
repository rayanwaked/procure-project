/* Import Styles */
import "../../styles.css";
import "./landing.css";
import "./mobilelanding.css"

/* Import Icons */
/* Import Files */
import LandingNavigation from "./navigation/navigation";
import LandingText from "./header/landing-text/landingtext"
import Testimonial from "./header/testimonial/testimonial";

import HeroProfile from "./header/hero/profile/profile";
import HeroFinance from "./header/hero/finance/finance";
import HeroInvoice from "./header/hero/invoice/invoice";
import HeroHistory from "./header/hero/history/history";

import LandingFooter from "./footer/footer";
import GettingStarted from "./getting-started/getting-started";

/* Code */
export default function Landing() {
    return (
        <div className="Landing">
            <LandingNavigation />
            <div className="LandingHeadline">
                {/* Landing Headers */}
                <div className="LandingHeadlineText">
                    <LandingText />
                    <Testimonial />
                </div>

                {/* Hero Content */}
                <div className="DontShowOnDesktop"
                     style={{marginTop: "-2vh", marginBottom: "-12vh"}}>
                    <p className="LandingGettingStartedSubHeadline DontShowOnDesktop">GORGEOUS DESIGN</p>
                    <p className="LandingGettingStartedHeadline DontShowOnDesktop">Beauty without sacrificing
                                                                                   functionality</p>
                </div>

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
                        <HeroFinance />
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

            {/* Getting Started */}
            <div>
                <GettingStarted />
            </div>

            {/* Footer */}
            <div className="Footer">
                <LandingFooter />
            </div>
        </div>
    );
}
