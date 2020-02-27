import React from "react";
import {
  Link
} from "react-router-dom";
import JobViewerItem from './JobViewerItem';
import JobViewerContent from './JobViewerContent';

export default function JobViewer() {
  return (
    <div className="job-viewer">
        <div className="job-viewer__items">
          <ul>
            <li>
              <JobViewerItem 
                img="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                employer="Facebook" 
                active="true"
                location="Toronto, ON" 
                title="React Developer"  />
            </li>
            <li>
              <JobViewerItem 
                title="Angular Developer" 
                employer="Google"
                location="Waterloo, ON"
                img="https://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png"  />
            </li>
            <li>
              <JobViewerItem 
                title="Software Developer" 
                employer="Orbis Communications"
                location="Hamilton, ON"
                img="https://orbiscommunications.com/wp-content/uploads/2019/11/ORBIS-ICON-BLACK.png"  />
            </li>
            <li>
              <JobViewerItem title="Java Developer" employer="McDonalds" location="Waterloo, ON" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1170px-McDonald%27s_Golden_Arches.svg.png"  />
            </li>
          </ul>
        </div>
        <JobViewerContent />
    </div>
  );
}