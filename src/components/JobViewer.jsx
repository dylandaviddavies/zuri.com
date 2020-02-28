import React from "react";
import JobViewerItem from './JobViewerItem';
import JobViewerContent from './JobViewerContent';
import db from '../db';
var jobs = db.jobs;
export default class JobViewer extends React.Component {
  constructor(props){
    super(props);    
    let jobId = this.props.activeJobId;
    if ( jobId == null )
      jobId = jobs.map(j => j.id).find(j => true);
    this.state = {
      jobs : jobs,
      activeJobId: jobId
    };
  }
  componentDidUpdate(){    
    if (this.state.activeJobId !== this.props.activeJobId) {
      this.setState({ activeJobId: this.props.activeJobId });
    }
  }
  render(){
    var activeJob = this.state.jobs.find(j => j.id == this.state.activeJobId);
    if ( activeJob == null || activeJob.id == null )
      activeJob = this.state.jobs.find(j => true);
    return (
      <div className="job-viewer">
          <div className="job-viewer__items">
            <ul>
              {this.state.jobs.map((job, i) => {
                return <li key={job.id}>
                  <JobViewerItem                     
                    id={job.id}
                    employer={job.employer.title}
                    img={job.employer.img} 
                    active={activeJob.id === job.id}
                    location={job.location}
                    title={job.title} />
                </li>
              })}
            </ul>
          </div>
          <JobViewerContent 
            title={activeJob.title} 
            employer={activeJob.employer.title} 
            description={activeJob.description} 
            location={activeJob.location}
            img={activeJob.employer.img} />
      </div>
    );
  }
}