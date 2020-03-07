import React from "react";

export default class JobViewerContent extends React.Component {  
    description() {
      return { __html: this.props.description };
    }
    render(){
        return (
            <div className="job-viewer__content">
                <div className="job-viewer__content__header">
                    <img className="job-viewer__content__img" src={this.props.img} />
                    <div>
                        <h3 className="job-viewer__content__title">{this.props.title}</h3>
                        <span className="job-viewer__content__subtitle">{this.props.employer} • {this.props.locale}</span>
                    </div>
                    <div className="ml-auto">
                        <button className="btn btn--text btn--secondary">
                            Save
                        </button>
                        <button className="btn btn--fill btn--primary">
                            Apply
                        </button>
                    </div>
                </div>
                
                <div className="job-viewer__content__description py-8" dangerouslySetInnerHTML={this.description()} />
                <div className="job-viewer__content__actions">
                    <button className="btn btn--fill btn--primary">
                        Apply
                    </button>
                    <button className="btn btn--text btn--secondary">
                        Save
                    </button>
                </div>
            </div>
        );
    }
}