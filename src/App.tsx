/* Import Styles */
import "./styles.css";

/* Import Files */
import Landing from "./pages/landing/landing"
/*
import Navigation from "./pages/global/navigation/navigation"
import Dashboard from "./pages/dashboard/dashboard";
*/
/* Code */
export default function App() {
    return (
        <div className="App">
            <div className="Dashboard">
                <Landing />
            </div>
        </div> /* App */
    );
}
