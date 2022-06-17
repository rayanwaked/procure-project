/* Import Styles */
import "../../styles.css";
import "./landing.css";
import "./mobilelanding.css"

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

                    {/* Testimonial */}
                    <div className="LandingTestimonial">
                        <div className="LandingTestimonialContent">

                            <div>
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                                     style={{
                                         width: "8vh",
                                         height: "8vh",
                                         borderRadius: "100%",
                                         objectFit: "cover",
                                         marginTop: "20px",
                                         marginLeft: "30px"
                                     }}
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
                                    McKensey Woods, CEO, Mckensey & Co.</p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Hero Content */}
                <div className="HeroBackdrop">

                    <div className="HeroBackdropContent"
                         style={{marginTop: "-4vh", minHeight: "144px"}}></div>

                    <div className="HeroBackdropContent"
                         style={{height: "12vh", minHeight: "102px"}}></div>

                    <div className="HeroBackdropContent"
                         style={{height: "10vw", minHeight: "151px"}}></div>

                    <div className="HeroBackdropContent"
                         style={{height: "15vw", minHeight: "205px", marginBottom: "-4vh"}}></div>

                </div>
            </div>
        </div>
    );
}
