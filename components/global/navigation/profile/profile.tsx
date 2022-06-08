/* Import Styles */
import "../../../../src/styles.css";
import "./profile.css";

import { SettingsIcon } from "../../../../assets/navigation/settings.tsx";
import { FilterIcon } from "../../../../assets/navigation/filter.tsx";

/* Import Files */

/* Code */
export default function Profile() {
  return (
    <div className="Profile">
      <hr className="divider" />
      <div className="ProfileContainer">
        <div className="ProfileFragmentsSeperate">
          <div className="ProfileFragments">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
            <p className=""> John Snow </p>
          </div>
          <div>
            <FilterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
