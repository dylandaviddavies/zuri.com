import React from "react";
import {
  Link
} from "react-router-dom";

export default class JobViewerItem extends React.Component {
    render(){
        return (
            <Link to={"/" + this.props.id} className={"job-viewer__item " + (this.props.active ? "job-viewer__item--active" : "")}>
                <img className="job-viewer__item__img" src={this.props.img} alt={this.props.title} />
                <span className="job-viewer__item__content">
                    <span className="job-viewer__item__title">{this.props.title}</span>
                    <span className="job-viewer__item__employer">{this.props.employer}</span>
                    <span className="job-viewer__item__location">{this.props.location}</span>
                </span>
            </Link>
        );
    }
}