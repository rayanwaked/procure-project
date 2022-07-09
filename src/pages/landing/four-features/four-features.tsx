/* Import Styles */
import "../../../styles.css";
import "./four-features.css";

/* Import Files */
/* Import Icons */


/* Code */
export default function FourFeatures() {
    return (
        <div className="FourFeaturesContainer">
            <div className="FourFeaturesText">
                <div className="FourFeaturesContentAlignment">
                    {/* Feature 01 */}
                    <p className="FourFeaturesNumber">01</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">Convenient</p>
                        <p className="FourFeaturesText">Find everyone and everything <br /> that you need in one place.
                        </p>
                    </div>
                </div>

                {/* Feature 02 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">02</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">Efficient</p>
                        <p className="FourFeaturesText">Spend more time getting <br /> things done faster.
                        </p>
                    </div>
                </div>

                {/* Feature 03 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">03</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">Simple</p>
                        <p className="FourFeaturesText">Intuitive and easy to use. <br /> It doesn't take a genius.
                        </p>
                    </div>
                </div>

                {/* Feature 04 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">04</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">Easy</p>
                        <p className="FourFeaturesText">Get your workflow up and <br /> running in no time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="FourFeaturesImage HeroAnimation">
                <div className="FourFeaturesImageBackground">
                    <div className="FourFeaturesInvoiceDetails3">
                        <div className="FourFeaturesInvoiceDetails2">
                            <div className="FourFeaturesInvoiceDetails1">
                                <p className="FourFeaturesInvoiceText">Invoice Details</p>

                                <div>
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                                         className="FourFeaturesProfilePicture"
                                         alt="headshot photo" />
                                </div>
                                <p className="FourFeaturesInvoiceSmallText">Status: Paid</p>
                                <p className="FourFeaturesInvoiceText">+$3,500</p>

                                <div style={{display: "flex", flexDirection: "column", alignContent: "flex-start"}}>
                                    <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile"
                                       style={{padding: "20px"}}>Date</p>
                                    <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile"
                                       style={{padding: "20px"}}>Fees</p>
                                    <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile"
                                       style={{padding: "20px"}}>Total</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}