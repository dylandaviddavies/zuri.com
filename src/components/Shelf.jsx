import React from "react";
import {
  Link
} from "react-router-dom";

export default class Drawer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            toggle: this.props.toggle,
            onToggle: this.props.onToggle
        };
    }
    componentDidUpdate(){
        if (this.state.toggle !== this.props.toggle)
            this.setState({
                toggle: this.props.toggle
            });
    }
    close(){
        this.setState({
            toggle: false
        }, () => this.state.onToggle(false));
    }
    render(){
        return (
            <div className={"shelf " + (this.state.toggle ? "shelf--visible" : "")} id={this.state.id} aria-label="Sidebar menu" aria-hidden={this.state.toggle ? 'false' : 'true'}>
                <aside className="shelf__drawer" tabindex="-1">                    
                    <nav className="shelf__drawer__body">
                        <ul>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Post a Job
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Find a Job
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Upload Resume
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Salary Insight
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Resume Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Career Advice
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.close.bind(this)} aria-controls={this.state.id} aria-expanded={this.state.toggle ? 'true' : 'false'}>
                                    Practice Interviews
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        );
    }
}