/* Import Styles */
import "../../../src/styles.css";
import "./navigation.css";

/* Import Icons */
import { LogoIcon } from "../../../assets/branding/logo.tsx";
import { DashboardIcon } from "../../../assets/navigation/dashboard.tsx";
import { ChatIcon } from "../../../assets/navigation/chat.tsx";
import { OverviewIcon } from "../../../assets/navigation/overview.tsx";
import { ReportIcon } from "../../../assets/navigation/report.tsx";
import { SettingsIcon } from "../../../assets/navigation/settings.tsx";
import { Fragment } from "react";

/* Import Files */
import DashboardPicker from "./dashboard-picker/dashboard-picker.tsx";
import Profile from "./profile/profile.tsx";

/* Code */
export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="NavigationContainer">
        <div className="NavigationElements">
          {/* Logo */}
          <div className="NavigationFragments">
            <LogoIcon />
            <p className="NavigationTitle"> procure </p>
          </div>

          {/* Dashboard Picker */}
          <div className="NavigationFragments">
            <DashboardPicker />
          </div>

          {/* Dashboard */}
          <div className="NavigationFragments">
            <DashboardIcon />
            <p className="NavigationText"> Dashboard </p>
          </div>

          {/* Overview */}
          <div className="NavigationFragments">
            <OverviewIcon />
            <p className="NavigationText"> Overview </p>
          </div>

          {/* Chat */}
          <div className="NavigationFragments">
            <ChatIcon />
            <p className="NavigationText"> Chat </p>
          </div>

          {/* Shortchuts */}
          <span className="br" />
          <div className="NavigationFragments">
            <p className="NavigationSection"> SHORTCUTS </p>
          </div>
          {/* Tasks */}

          {/* Report */}
          <div className="NavigationFragments">
            <ReportIcon />
            <p className="NavigationText"> Report </p>
          </div>

          {/* Settings */}
          <div className="NavigationFragments">
            <SettingsIcon />
            <p className="NavigationText"> Settings </p>
          </div>

          {/* Profile */}
          <div className="NavigationFragments" className="Profile">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
