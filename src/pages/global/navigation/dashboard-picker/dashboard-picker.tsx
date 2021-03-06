/* Import Styles */
import "../../../../styles.css";
import "./dashboard-picker.css";

/* Import Icons */
import {DropdownIcon} from "../../../../assets/navigation/dropdown";

/* Code */
export default function DashboardPicker() {
    return (
        /* Parent */
        <div className="DashboardPicker">

            { /* Divider */}
            <hr className="divider" />

            { /* Container */}
            <div className="DashboardPickerContainer">

                { /* Seperate Icon/Text from Dropdown Icon */}
                <div className="DashboardFragmentsSeparate">

                    { /* Icon/Text */}
                    <div className="DashboardPickerFragments">
                        <img src="https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                             alt="Icon"
                             className="DashboardPickerImage" />

                        <div style={{lineHeight: "0.8vh"}}>
                            <p className="DashboardHeader"><b>Procure</b></p>
                            <br />
                            <p className="DashboardHeader"> general team </p>
                        </div>
                    </div>

                    { /* Dropdown */}
                    <div style={{
                        display: "flex",
                        marginLeft: "2vw",
                        marginTop: "-2.4vh",
                        width: "100%",
                        height: "8vh",
                        alignItems: "center"
                    }}>
                        <DropdownIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}