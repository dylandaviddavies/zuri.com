import React from "react";

export default class EmptyJobViewerContent extends React.Component {  
    render(){
        return (
            <div className="job-viewer__content">
                <h2 className="text-center">
                    No results found.
                </h2>
                <p className="text-center">
                    Your search returned no results. Try shortening or rephrasing your search. 
                </p>
            </div>
        );
    }
}