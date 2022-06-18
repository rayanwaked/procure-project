/* Import Styles */
import "../../../../styles.css";
import "./invoice.css";
import {SuccessIcon} from "../../../../assets/landing/success";

/* Import Files */

/* Code */
export default function HeroInvoice() {
    return (
        <div className="Invoice">
            <div className="HeroCenter">
                <div style={{marginBottom: "-12px"}}><SuccessIcon /></div>
                <p className="InvoicePaidLargeText">Invoice Added</p>
                <p className="InvoicePaidSmallText">Invoice #1334545 has been added!</p>
            </div>
        </div>
    );
}
