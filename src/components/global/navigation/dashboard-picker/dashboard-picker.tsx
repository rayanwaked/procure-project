/* Import Styles */
import "../../../../styles.css";
import "./dashboard-picker.css";

/* Import Files */

/* Code */
export default function DashboardPicker() {
    return (
        <div className="DashboardPicker">
            <hr className="divider" />
            <div className="DashboardPickerContainer">
                <div className="DashboardFragmentsSeparate">
                    <div className="DashboardPickerFragments">
                        <img src="https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                             alt="Icon" />
                        <p className="Header"> Procure </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
