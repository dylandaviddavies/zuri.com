import React from "react";
import {
  Link
} from "react-router-dom";

export default class JobViewerItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            title: props.title,
            img: props.img,
            locale: props.locale,
            active: props.active,
            employer: props.employer
        };
    }
    componentDidUpdate(){
        if (this.state.location !== this.props.location) {
            this.setState({
                location: this.props.location
            });
        }
    }
    render(){
        return (
            <Link to={{pathname: "/" + this.props.id, search: this.props.location.search }}className={"job-viewer__item " + (this.props.active ? "job-viewer__item--active" : "")}>
                <img className="job-viewer__item__img" src={this.props.img} alt={this.props.title} />
                <span className="job-viewer__item__content">
                    <span className="job-viewer__item__title">{this.props.title}</span>
                    <span className="job-viewer__item__employer">{this.props.employer}</span>
                    <span className="job-viewer__item__locale">{this.props.locale}</span>
                </span>
            </Link>
        );
    }
}