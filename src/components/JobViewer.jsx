import React from "react";
import JobViewerItem from './JobViewerItem';
import JobViewerContent from './JobViewerContent';
import db from '../db';
var jobs = db.jobs;
export default class JobViewer extends React.Component {
  constructor(props){
    super(props);    
    const {
      activeJobId = jobs.map(j => j.id).find(j => true),
    } = props;
    this.baseLimit = 5;
    this.state = {
      activeJobId,
      limit: this.baseLimit
    };
  }
  componentDidUpdate(){    
    if (this.state.activeJobId !== this.props.activeJobId) {
      this.setState({ activeJobId: this.props.activeJobId });
    }
  }
  renderJobs(){
    return jobs.slice(0,this.state.limit).map((job, i) => {
      return <li key={job.id}>
        <JobViewerItem                     
          id={job.id}
          employer={job.employer.title}
          img={job.employer.img} 
          active={this.activeJob.id === job.id}
          location={job.location}
          title={job.title} />
      </li>
    });
  }
  loadMore(){
    this.setState({
      limit: this.state.limit + this.baseLimit
    });
  }
  renderLoadMoreButton(){
    if (this.state.limit > jobs.length)
      return null;
    return (
      <li>
        <button class="job-viewer__load-more" onClick={this.loadMore.bind(this)}>
          Load more
        </button>
      </li>
    );
  }
  render(){
    this.activeJob = jobs.find(j => j.id == this.state.activeJobId);
    if ( this.activeJob == null || this.activeJob.id == null )
      this.activeJob = jobs.find(j => true);
    return (
      <div className="job-viewer">
          <div className="job-viewer__items">
            <ul>
              {this.renderJobs()}
              {this.renderLoadMoreButton()}
            </ul>
          </div>
          <JobViewerContent 
            title={this.activeJob.title} 
            employer={this.activeJob.employer.title} 
            description={this.activeJob.description} 
            location={this.activeJob.location}
            img={this.activeJob.employer.img} />
      </div>
    );
  }
}