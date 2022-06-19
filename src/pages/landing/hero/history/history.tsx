/* Import Styles */
import "../../../../styles.css";
import "./history.css";

/* Import Icons */

/* Import Files */

/* Code */
export default function HeroHistory() {
    return (
        <div className="History">

            {/* Payment History Title and Search Bar */}
            <div className="HeroPaymentHistoryHeader">
                <p className="HeroPaymentHistoryLargeText">Order History</p>
                <div className="HeroPaymentHistorySearchBar NoMobile">
                    <p className="HeroPaymentHistorySmallText NoMobile" style={{marginLeft: "12px", color: "#6A7183"}}>Search</p>
                </div>
            </div>

            {/* Payment History Content Labels */}
            <div className="HeroPaymentHistoryContent" style={{marginTop: "-5px"}}>


                <div style={{display: "flex", flexDirection: "column"}}>
                    <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>TRANSACTION ID</p>
                    <p className="HeroPaymentHistorySmallText">999 9999 99347</p>
                    <p className="HeroPaymentHistorySmallText" style={{marginTop: "5px"}}>999 9999 99347</p>
                </div>


                <div id="NoMobile" style={{display: "flex", flexDirection: "column"}}>
                    <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>DATE</p>
                    <p className="HeroPaymentHistorySmallText">10/12</p>
                    <p className="HeroPaymentHistorySmallText" style={{marginTop: "5px"}}>10/12</p>
                </div>


                <div id="NoMobile" style={{display: "flex", flexDirection: "column"}}>
                    <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>AMOUNT</p>
                    <p className="HeroPaymentHistorySmallText">$12,500</p>
                    <p className="HeroPaymentHistorySmallText" style={{marginTop: "5px"}}>$12,500</p>
                </div>


                <div style={{display: "flex", flexDirection: "column", alignContent: "flex-start"}}>
                    <p className="HeroPaymentHistorySmallText" style={{fontSize: "14px", color: "#6A7183"}}>STATUS</p>
                    <p className="HeroPaymentHistoryStatus">Posted</p>
                    <p className="HeroPaymentHistoryStatus" style={{marginTop: "5px"}}>Posted</p>
                </div>


            </div>
        </div>
    );
}
