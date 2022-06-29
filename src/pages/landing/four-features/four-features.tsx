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
                        <p className="FourFeaturesHeader">A simple header</p>
                        <p className="FourFeaturesText">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                        </p>
                    </div>
                </div>

                {/* Feature 02 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">02</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">A simple header</p>
                        <p className="FourFeaturesText">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                        </p>
                    </div>
                </div>

                {/* Feature 03 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">03</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">A simple header</p>
                        <p className="FourFeaturesText">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                        </p>
                    </div>
                </div>

                {/* Feature 04 */}
                <div className="FourFeaturesContentAlignment">
                    <p className="FourFeaturesNumber">04</p>
                    <div className="FourFeatureTextAlignment">
                        <p className="FourFeaturesHeader">A simple header</p>
                        <p className="FourFeaturesText">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="FourFeaturesImage">
                <div className="FourFeaturesImageBackground">
                    <div className="FourFeaturesInvoiceDetails3">
                        <div className="FourFeaturesInvoiceDetails2">
                            <div className="FourFeaturesInvoiceDetails1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}