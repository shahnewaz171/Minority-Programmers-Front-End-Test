import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FundStartup from "./components/FundStartup/FundStartup";
import LearnPage from './components/LearnPage/LearnPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/incubator">
            <FundStartup />
          </Route>
          <Route path="/learn">
            <LearnPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
