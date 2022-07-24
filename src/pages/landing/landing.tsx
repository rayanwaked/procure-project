/* Import Styles */
import "../../styles.css";
import "./landing.css";
import "./mobilelanding.css"

/* Import Icons */
/* Import Packages */
import {motion} from "framer-motion";

/* Import Files */
import LandingNavigation from "./navigation/navigation";
import LandingText from "./header/landing-text/landingtext"
import Testimonial from "./header/testimonial/testimonial";

import HeroProfile from "./header/hero/profile/profile";
import HeroFinance from "./header/hero/finance/finance";
import HeroInvoice from "./header/hero/invoice/invoice";
import HeroHistory from "./header/hero/history/history";

import GettingStarted from "./getting-started/getting-started";
import FourFeatures from "./four-features/four-features";
import Pricing from "./pricing/pricing";

import LandingFooter from "./footer/footer";


/* Custom Animation Function for Hero Background */
function BackgroundFadeInUpWhenVisible({children}: { children: any }) {
    return (
        <motion.aside
            className={"HeroBackdrop"}
            id={"HeroBackdrop"}
            whileInView={{
                visibility: "visible",
                opacity: 1,
                transform: "translateY(0px)"
            }}
            initial={{opacity: 0, transform: "translateY(80px)"}}
            transition={{
                duration: 1,
                delay: 0.25
            }}
        >
            {children}
        </motion.aside>
    );
}

/* Custom Animation Function for Hero Content */
function FadeInUpWhenVisible({children}: { children: any }) {
    return (
        <motion.aside
            className={"HeroBackdrop"}
            whileInView={{
                visibility: "visible",
                opacity: 1,
                transform: "translateY(0px)"
            }}
            initial={{opacity: 0, transform: "translateY(80px)"}}
            transition={{
                duration: 1,
                delay: 0.25
            }}
        >
            {children}
        </motion.aside>
    );
}

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

                {/* Hero Images */}
                {/* Hero Profile Card */}
                <FadeInUpWhenVisible>
                    <div className="HeroBackdropContent"
                         id="HeroProfile"
                         style={{marginTop: "-4vh", minHeight: "144px", maxHeight: "160px"}}>
                        <HeroProfile />
                    </div>

                    {/* Hero Finance Card */}
                    <div className="HeroBackdropContent"
                         id="HeroFinance"
                         style={{height: "12vh", minHeight: "104px"}}>
                        <HeroFinance />
                    </div>

                    {/* Hero Invoice Paid Card */}
                    <div className="HeroBackdropContent"
                         id="HeroInvoicePaid"
                         style={{height: "11vw", minHeight: "151px"}}>
                        <HeroInvoice />
                    </div>

                    {/* Hero Payment History Card */}
                    <div className="HeroBackdropContent"
                         id="HeroPaymentHistory"
                         style={{height: "15vw", minHeight: "205px", maxHeight: "210px", marginBottom: "-4vh"}}>
                        <HeroHistory />
                    </div>
                </FadeInUpWhenVisible>
            </div>

            {/* Getting Started */}
            <div>
                <GettingStarted />
            </div>

            {/* Four Features */}
            <div>
                <FourFeatures />
            </div>

            {/* Pricing */}
            <div>
                <Pricing />
            </div>

            {/* Footer */}
            <div className="Footer">
                <LandingFooter />
            </div>
        </div>
    );
}
