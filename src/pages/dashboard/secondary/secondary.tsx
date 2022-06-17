/* Import Styles */
import "../../../styles.css";
import "./secondary.css";

/* Import Files */

/* Code */
export default function Secondary() {
    return (
        <div className="SecondaryContainer">
            <div className="SecondaryElements">
                {/* Section Title */}
                <div className="SecondaryFragments">
                    <p className="SecondaryTitle"> Top Vendors </p>
                </div>
                {/* Section Title */}
                <div className="SecondaryFragments">
                    <p className="SecondarySubtitle"> Favorites </p>
                </div>
            </div>
        </div>
    );
}
