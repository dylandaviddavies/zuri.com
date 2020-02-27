import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import JobViewer from './JobViewer';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="p-4">
          <JobViewer />
        </div>
      </div>
    </Router>
  );
}