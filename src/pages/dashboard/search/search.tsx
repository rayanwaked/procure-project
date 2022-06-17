/* Import Styles */
import "../../../styles.css";
import "./search.css";

/* Import Icons */
import {SearchIcon} from "../../../assets/dashboard/search";

/* Import Files */

/* Code */
export default function Search() {
    return (
        <div className="Search">
            <div className="SearchContainer">
                <div className="SearchContainerFragments">
                    <SearchIcon />
                    <p> Search </p>
                </div>
            </div>
        </div>
    );
}
