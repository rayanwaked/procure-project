/* Import Styles */
import "../../../../styles.css";
import "./history.css";

/* Import Files */

/* Code */
export default function HeroHistory() {
    return (
        <div className="History">

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
    );
}
