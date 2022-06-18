/* Import Styles */
import "../../../../styles.css";
import "./finance.css";

/* Import Files */

/* Code */
export default function HeroFinance() {
    return (
        <div className="HeroFinance">
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
    );
}
