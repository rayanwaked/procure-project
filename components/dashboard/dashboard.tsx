/* Import Styles */
import "../../src/styles.css";
import "./dashboard.css";

/* Import Files */
import Main from "./main/main.tsx";
import Secondary from "./secondary/secondary.tsx";
import Tertiary from "./tertiary/tertiary.tsx";
import Quaternary from "./quaternary/quaternary.tsx";
import Salutation from "./salutation/salutation.tsx";
import Search from "./search/search.tsx";

/* Code */
export default function Dashboard() {
  return (
    <div className="App">
      <br />
      <div className="SalutationSpacing">
        <Salutation />
        <Search />
      </div>
      <div className="Dashboard">
        <Tertiary />
      </div>
      <br />
      <div className="Dashboard">
        <Main />
        <Secondary />
      </div>
      <br />
      <div className="Dashboard">
        <Quaternary />
      </div>
    </div> /* Dashboard */
  );
}
