/* Import Styles */
import "../../styles.css";
import "./dashboard.css";

/* Import Files */
import Main from "./main/main";
import Secondary from "./secondary/secondary";
import Tertiary from "./tertiary/tertiary";
import Quaternary from "./quaternary/quaternary";
import Salutation from "./salutation/salutation";
import Search from "./search/search";

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
