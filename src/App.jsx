import Cabs from "./pages/Cabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Cabs} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
