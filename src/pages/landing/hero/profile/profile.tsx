/* Import Styles */
import "../../../../styles.css";
import "./profile.css";

/* Import Files */
import {MailIcon} from "../../../../assets/landing/mail"

/* Code */
export default function HeroProfile() {
    return (
        <div className="HeroProfile">
            {/* Hero Profile Card */}
            <div className="HeroProfileContent">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                     className="HeroProfileImage"
                     alt="headshot photo" />
                <div className="HeroProfileContentDetails">
                    <p className="HeroProfileName">James Wilson</p>
                    <p className="HeroProfileEmail"><MailIcon />&nbsp;&nbsp;james@wilson.co</p>

                    <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                        <p className="HeroProfileSmallText"
                           id="HeroProfileFeatures"
                           style={{marginTop: "0"}}>Added Orders</p>

                        <p className="HeroProfileSmallText NoMobile NoTablet"
                           id="HeroProfileFeatures"
                           style={{
                               marginTop: "0",
                               color: "#6A7183",
                               backgroundColor: "rgba(255,255,255,0.05)"
                           }}>Invoices</p>

                        <p className="HeroProfileSmallText NoMobile NoTablet"
                           id="HeroProfileFeatures"
                           style={{
                               marginTop: "0",
                               color: "#6A7183",
                               backgroundColor: "rgba(255,255,255,0.05)"
                           }}>Messages</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
