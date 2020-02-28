import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Header from './Header';
import JobViewer from './JobViewer';
export default function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Header />
        <Switch>
          <Route path="/:id?">
            <JobViewerRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function JobViewerRoute() {
  let {id} = useParams();
  return (
    <div className="p-4">
      <JobViewer activeJobId={id} />
    </div>
  );
}