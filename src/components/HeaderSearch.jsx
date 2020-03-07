import React from "react";
import {
  withRouter
} from "react-router-dom";
class HeaderSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: undefined
        };
    }
    onSubmit(event){
        event.preventDefault()
        this.props.history.push({
            search: `?q=${this.state.query}`
        })
    }
    onQueryChange(event){
        this.setState({
            query: event.target.value
        });
    }
    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="header__search">
                <button className="material-icons-round header__search__icon" aria-hidden="true">search</button>
                <input onChange={this.onQueryChange.bind(this)} className="header__search__input" type="text" placeholder="Search for jobs" />
            </form>
        );
    }
}
export default withRouter(HeaderSearch);