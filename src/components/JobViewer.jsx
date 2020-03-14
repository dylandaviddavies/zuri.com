import React from "react";
import JobViewerItems from './JobViewerItems';
import JobViewerContent from './JobViewerContent';
import EmptyJobViewerContent from './EmptyJobViewerContent';
import JobsService from '../services';
var jobsService = new JobsService();
export default class JobViewer extends React.Component {

  /*
    Lifecycle methods
  */
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      query: this.props.query,
      items: [],
      activeItemId: this.props.activeItemId,
      doneFetching: false,
      location: this.props.location,
      activeItem: null,
      totalItemsCount: 0
    };
  }
  componentDidUpdate(prevProps){
    if (this.state.activeItemId !== this.props.activeItemId && prevProps.activeItemId !== this.props.activeItemId){
      this.setState({
        activeItemId: this.props.activeItemId
      }, () => this.loadItemContent());
    }
    if (this.state.location !== this.props.location) {
        this.setState({
            location: this.props.location
        });
    }
    if (this.state.query !== this.props.query) {
      let activeItemId = this.state.activeItemId;
      if (this.props.activeItemId == null || this.props.activeItemId.trim() === '')
        activeItemId = null;
      this.setState({
        query: this.props.query,
        activeItemId: activeItemId
      }, () => this.reloadItems(() => this.loadItemContent()));      
    }
  }
  componentDidMount(){
    this.loadItems(() => this.loadItemContent());
  }

  /*
    Render methods
  */
  renderItems(){
    return (
      <div className="job-viewer__results">
        <div className="job-viewer__header d-flex align-items-center">
          <div className="font-weight-semibold">{this.state.query || 'All'} Jobs ({this.state.totalItemsCount} Jobs Found)</div>
          <button aria-label="Create job alert" title="Create job alert" className="ml-auto alert-btn">
            <i aria-hidden="true" className="material-icons-round">
              add_alert
            </i>
          </button>
        </div>
        <ul className="job-viewer__items">
          <JobViewerItems location={this.state.location} items={this.state.items} activeItemId={this.state.activeItemId} />
          {this.renderFetchButton()}
        </ul>
      </div>
    );
  }
  renderFetchButton(){
    if (this.state.doneFetching)
      return null;
    return (
      <li>
        <button className="job-viewer__fetch" onClick={this.fetch.bind(this)}>
          Load more
        </button>
      </li>
    );
  }
  renderContent(){
    if (!this.state.activeItem)
      return (
        <EmptyJobViewerContent />
      );
    return (<JobViewerContent 
            title={this.state.activeItem.title} 
            employer={this.state.activeItem.employer.title} 
            description={this.state.activeItem.description} 
            locale={this.state.activeItem.locale}
            img={this.state.activeItem.employer.img} />);
  }
  render(){
    return (
      <div className="job-viewer">
        {this.renderItems()}
        {this.renderContent()}
      </div>
    );
  }

  /*
    Modifier methods
  */
  reloadItems(callback){
    this.setState({
      page: 1,
      doneFetching: false,
      items: []
    }, () => this.loadItems(callback)); 
  }
  loadItems(callback){    
    let {results, done, totalCount} = jobsService.fetch({
      query: this.state.query,
      page: this.state.page,
      itemsPerPage: 6
    });
    this.setState({
      items: this.state.items.concat(results),
      doneFetching: done,
      totalItemsCount: totalCount
    }, callback);
  }
  fetch(){    
    this.setState({
      page: this.state.page + 1
    }, () => this.loadItems());
  }
  loadItemContent(){
    let id = this.state.activeItemId;
    if (id == null){
      let item = this.state.items.find(i => true);
      if (item != null)
        this.setState({
          activeItemId: item.id
        }, () => this.loadItemContent());
    }
    else {
      this.setState({
        activeItem: jobsService.load(id)
      });
    }
  }
}