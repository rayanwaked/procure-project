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

            {/* Beginning of Cards */}
            <div className="FourFeaturesImage HeroAnimation">
                <div className="FourFeaturesImageBackground">
                    <div className="FourFeaturesInvoiceDetails3">
                        <div className="FourFeaturesInvoiceDetails2">
                            <div className="FourFeaturesInvoiceDetails1">
                                {/* Card Title */}
                                <p className="FourFeaturesInvoiceText">Invoice Details</p>
                                {/* Person Image */}
                                <div>
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                                         className="FourFeaturesProfilePicture"
                                         alt="headshot photo" />
                                </div>

                                {/* Status and Amount */}
                                <p className="FourFeaturesInvoiceSmallText">Status: Paid</p>
                                <p className="FourFeaturesInvoiceText">+$3,500</p>

                                {/* Other Details */}
                                <div style={{display: "flex", flexDirection: "column", alignContent: "flex-start"}}>
                                    {/* Date Details */}
                                    <div style={{display: "flex", justifyContent: "space-around", gap: "0px", padding: "15px"}}>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile">Date</p>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile" style={{color: "white"}}>Oct. 28, 2022</p>
                                    </div>
                                    {/* Fee Details */}
                                    <div style={{display: "flex", justifyContent: "space-around", gap: "47px", padding: "15px"}}>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile">Fees</p>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile" style={{color: "white"}}>$158.99</p>
                                    </div>
                                    {/* Total Details */}
                                    <div style={{display: "flex", justifyContent: "space-around", gap: "47px", padding: "15px"}}>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile">Total</p>
                                        <p className="FourFeaturesInvoiceSmallText FourFeaturesNoMobile" style={{color: "white"}}>$573.99</p>
                                    </div>
                                </div>
                                {/* Price Graph */}
                                <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "end", marginRight: "40px", marginLeft: "40px"}}>
                                    <div className="FourFeatureGraph FourFeaturesNoMobile" style={{height: "40px"}}>
                                        <p className="FourFeaturesInvoiceSmallText2">04/22</p>
                                    </div>

                                    <div className="FourFeatureGraph FourFeaturesNoMobile" style={{height: "48px"}}>
                                        <p className="FourFeaturesInvoiceSmallText2">05/22</p>
                                    </div>

                                    <div className="FourFeatureGraph FourFeaturesNoMobile" style={{height: "54px"}}>
                                        <p className="FourFeaturesInvoiceSmallText2">06/22</p>
                                    </div>

                                    <div className="FourFeatureGraph FourFeaturesNoMobile" style={{height: "62px"}}>
                                        <p className="FourFeaturesInvoiceSmallText2">07/22</p>
                                    </div>

                                    <div className="FourFeatureGraph FourFeaturesNoMobile" style={{height: "70px", backgroundColor: "#49D078"}}>
                                        <p className="FourFeaturesInvoiceSmallText2">08/22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}