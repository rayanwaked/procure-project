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

                        {/* Payment History Title and Search Bar */}
                        <div className="HeroPaymentHistoryContent">
                            <p className="HeroPaymentHistoryLargeText">Order History</p>
                            <div className="HeroPaymentHistorySearchBar">
                                <p className="HeroPaymentHistorySmallText" style={{marginLeft: "12px", color: "#6A7183"}}>Search</p>
                            </div>
                        </div>

                        {/* Payment History Content Labels */}
                        <div className="HeroPaymentHistoryContent" style={{marginTop: "-5px"}}>
                            <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>TRANSACTION ID</p>
                            <p className="HeroPaymentHistorySmallText" id="NoMobile" style={{fontSize: "14px", color: "#6A7183"}}>DATE</p>
                            <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>AMOUNT</p>
                            <p className="HeroPaymentHistorySmallText" id="NoMobile" style={{fontSize: "14px", color: "#6A7183"}}>STATUS</p>
                        </div>

                        {/* Payment History Content */}
                        <div className="HeroPaymentHistoryRow">

                            {/* Payment History Transaction ID */}
                            <div className="HeroPaymentHistory" style={{marginTop: "-5px"}}>
                                <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "white", whiteSpace: "nowrap"}}>99  99999 99752</p>
                                <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "white", whiteSpace: "nowrap"}}>99  99999 99753</p>
                            </div>

                            {/* Payment History Dates */}
                            <div className="HeroPaymentHistory" id="NoMobile" style={{marginTop: "-5px"}}>
                                <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "white"}}>10/12</p>
                                <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "white"}}>10/13</p>
                            </div>

                            {/* Payment History Amounts */}
                            <div className="HeroPaymentHistory" style={{marginTop: "-5px"}}>
                                <p className="HeroPaymentHistorySmallText HeroPaymentHistoryMobile" style={{fontSize: "14px", color: "white", marginLeft: "6px"}}>$12,950</p>
                                <p className="HeroPaymentHistorySmallText HeroPaymentHistoryMobile" style={{fontSize: "14px", color: "white", marginLeft: "6px"}}>$33,740</p>
                            </div>

                            {/* Payment History Statuses */}
                            <div className="HeroPaymentHistory" id="NoMobile" style={{marginTop: "-5px"}}>
                                <p className="HeroPaymentHistorySmallText" id="HeroPaymentHistoryStatus">Posted</p>
                                <p className="HeroPaymentHistorySmallText" id="HeroPaymentHistoryStatus" style={{marginTop: "19px"}}>Posted</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
