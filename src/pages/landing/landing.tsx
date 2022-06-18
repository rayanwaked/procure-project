/* Import Styles */
import "../../styles.css";
import "./landing.css";
import "./mobilelanding.css"

/* Import Icons */
import {SuccessIcon} from "../../assets/landing/success";
import {MailIcon} from "../../assets/landing/mail";

/* Import Files */
import LandingButton from "./components/button";

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
                        <LandingButton />
                    </div>

                    {/* Testimonial */}
                    <div className="LandingTestimonial">
                        <div className="LandingTestimonialContent">

                            <div>
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                                     className="LandingTestimonialImage"
                                     alt="headshot photo" />
                            </div>

                            <div style={{display: "grid"}}>
                                <p className="LandingTestimonialText">
                                    “A testimonial that absolutely nails the value
                                    proposition in a sentence or two”. </p>
                                <p className="LandingTestimonialText"
                                   style={{
                                       fontSize: "13px",
                                       marginTop: "-2px",
                                       paddingBottom: "20px"
                                   }}>
                                    McKinsey Woods, CEO, McKinsey & Co.</p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Hero Content */}
                <div className="HeroBackdrop HeroAnimation"
                     id="HeroBackdrop">

                    {/* Hero Profile Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroProfile"
                         style={{marginTop: "-4vh", minHeight: "144px"}}>

                        <div className="HeroProfileContent">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                                 className="HeroProfileImage"
                                 alt="headshot photo" />
                            <div className="HeroProfileContentDetails">

                                <p className="HeroProfileName">James Wilson</p>
                                <p className="HeroProfileEmail"><MailIcon />&nbsp;&nbsp;james@wilson.co</p>

                            </div>
                        </div>

                    </div>

                    {/* Hero Finance Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroFinance"
                         style={{height: "12vh", minHeight: "104px"}}>

                        <div id="HeroFinanceContent">
                            <p className="HeroFinanceSmallText">Ordered</p>
                            <p className="HeroFinanceLargeText">23</p>
                        </div>
                        <div id="HeroFinanceContent">
                            <p className="HeroFinanceSmallText">Shipped</p>
                            <p className="HeroFinanceLargeText">12</p>
                        </div>
                        <div id="HeroFinanceContent">
                            <p className="HeroFinanceSmallText">Delivered</p>
                            <p className="HeroFinanceLargeText">57</p>
                        </div>

                    </div>

                    {/* Hero Invoice Paid Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroInvoicePaid"
                         style={{height: "11vw", minHeight: "151px"}}>

                        <div className="HeroCenter">
                            <div style={{marginTop: "23px", marginBottom: "-12px"}}><SuccessIcon /></div>
                            <p className="InvoicePaidLargeText">Invoice Added</p>
                            <p className="InvoicePaidSmallText">Invoice #1334545 has been added!</p>
                        </div>

                    </div>

                    {/* Hero Payment History Card */}
                    <div className="HeroBackdropContent HeroAnimation"
                         id="HeroPaymentHistory"
                         style={{height: "15vw", minHeight: "205px", marginBottom: "-4vh"}}>

                        <div className="HeroPaymentHistoryContent">
                            <p className="HeroPaymentHistoryLargeText">Order History</p>
                            <div className="HeroPaymentHistorySearchBar">
                                <p className="HeroPaymentHistorySmallText" style={{marginLeft: "12px", color: "#6A7183"}}>Search</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
