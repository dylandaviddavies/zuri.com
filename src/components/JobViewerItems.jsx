import React from "react";
import JobViewerItem from './JobViewerItem';

export default class JobViewerItems extends React.Component {
    constructor(props){
      super(props);    
      this.state = {
        items: this.props.items,
        activeItemId: this.props.activeItemId,
        location: this.props.location
      };
    }
    componentDidUpdate(){
        if(this.state.activeItemId !== this.props.activeItemId){
            this.setState({
              activeItemId: this.props.activeItemId
            });
        }
        if(this.state.location !== this.props.location){
            this.setState({
              location: this.props.location
            });
        }
        if(this.state.items !== this.props.items){
            this.setState({
              items: this.props.items
            });
        }
    }
    render(){
        return this.state.items.map(i => {
          return <li key={i.id}>
            <JobViewerItem        
              location={this.state.location}             
              id={i.id}
              employer={i.employer.title}
              img={i.employer.img} 
              active={this.state.activeItemId === i.id}
              locale={i.locale}
              title={i.title} />
          </li>
        });
    }
}