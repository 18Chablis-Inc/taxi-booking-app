import Cabs from "./pages/Cabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./route";
function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Router>
        <Switch>
          <Route component={Cabs} path="/" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
