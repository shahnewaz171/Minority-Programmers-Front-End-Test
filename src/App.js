import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IncubatorPage from "./components/IncubatorPage/IncubatorPage";
import FundStartup from "./components/FundStartup/FundStartup";
import LearnPage from './components/LearnPage/LearnPage';
import Navbar from './components/shared/Navbar/Navbar';
import Course from './components/Dashboard/Course/Course';
import WeeklyActivities from './components/Dashboard/WeeklyActivities/WeeklyActivities';
import ActivityDetails from './components/Dashboard/ActivityDetails/ActivityDetails';
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/incubator">
            <IncubatorPage />
            <ScrollToTop />
          </Route>
          <Route path="/startup/:startupID">
            <Navbar />
            <FundStartup />
            <ScrollToTop />
          </Route>
          <Route path="/startup/:startupID">
            <IncubatorPage />
            <ScrollToTop />
          </Route>
          <Route path="/course/:courseID">
            <Course />
            <ScrollToTop />
          </Route>
          <Route path="/week/:weekID">
            <WeeklyActivities />
            <ScrollToTop />
          </Route>
          <Route path="/activity/:activityID">
            <ActivityDetails/>
            <ScrollToTop />
          </Route>
          <Route path="/learn">
            <LearnPage />
            <ScrollToTop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
