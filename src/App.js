import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FundStartup from "./components/FundStartup/FundStartup";
import LearnPage from './components/LearnPage/LearnPage';
import Navbar from './components/shared/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/startup/:startupID">
            <Navbar />
            <FundStartup />
          </Route>
          <Route path="/startup/:startupID">
            <Home />
          </Route>
          <Route path="/course/:courseID">
            <Dashboard />
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
