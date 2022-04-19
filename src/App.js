import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ScreenOne from "./pages/screen1/ScreenOne";

import ScreenTwo from "./pages/screen2/ScreenTwo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ScreenOne} />
        <Route path="/screen2" component={ScreenTwo} />
        {/* <Route path="/screen2">
          <ScreenTwo />
        </Route>
        <Route path="/">
          <ScreenOne />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
