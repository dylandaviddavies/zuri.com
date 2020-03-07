import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import Header from './Header';
import JobViewer from './JobViewer';
function useQuery(){
  return new URLSearchParams(useLocation().search);
}
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/:id?" component={JobViewerRoute} />
        </Switch>
      </div>
    </Router>
  );
}

function JobViewerRoute() {
  let {id} = useParams();
  let query = useQuery().get("q");
  return (
    <div className="p-4">
      <JobViewer activeItemId={id} query={query} location={useLocation()} />
    </div>
  );
}