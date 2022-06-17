/* Import Styles */
import "../../../../styles.css";
import "./profile.css";

import {FilterIcon} from "../../../../assets/navigation/filter";

/* Import Files */

/* Code */
export default function Profile() {
    return (
        <div className="Profile">
            <hr className="divider" />
            <div className="ProfileContainer">
                <div className="ProfileFragmentsSeperate">
                    <div className="ProfileFragments">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                             alt="Person" />
                        <p className="ProfileName"> John Snow </p>
                    </div>
                    <div>
                        <FilterIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
