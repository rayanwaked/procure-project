/* Import Styles */
import "./styles.css";

/* Import Files */
import Dashboard from "./components/dashboard/dashboard";
import Navigation from "./components/global/navigation/navigation";

/* Code */
export default function App() {
  return (
    <div className="App">
      <div className="Dashboard">
        <Navigation />
        <Dashboard />
      </div>
    </div> /* App */
  );
}
