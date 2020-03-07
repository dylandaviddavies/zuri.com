import React from "react";
import logo from '../logo.svg';
import HeaderSearch from './HeaderSearch';
import Shelf from './Shelf';
import {
  Link
} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shelfToggle: false
        };
    }
    toggleShelf(){
        this.setState({
            shelfToggle: !this.state.shelfToggle
        });
    }
    onShelfToggle(toggle){
        this.setState({
            shelfToggle: toggle
        });
    }
    render(){
        return (
            <div>
                <Shelf id="shelf" toggle={this.state.shelfToggle} onToggle={this.onShelfToggle.bind(this)} />
                <header className="header">
                    <div className="header__content">
                        <Link to="/">
                            <img className="header__img" src={logo} alt="Zuri" />
                        </Link>
                        <HeaderSearch />
                        <nav className="header__content__nav">
                            <ul>
                                <li>
                                    <Link to="/">
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Post a Job
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <button className="header__menu-btn" aria-expanded={this.state.shelfToggle ? 'true' : 'false'} onClick={this.toggleShelf.bind(this)} aria- aria-label="Toggle navigation menu">
                            <i class="material-icons-round" aria-hidden="true">menu</i>
                        </button>
                        <button className="header__account-btn">
                            <i class="material-icons-round" aria-hidden="true">person</i>
                        </button>
                        <button className="header__search-btn" aria-label="Search for jobs">
                            <i class="material-icons-round" aria-hidden="true">search</i>
                        </button>
                    </div>
                    <div className="header__subheader">
                        <nav className="header__subheader__nav">
                            <ul>
                                <li>
                                    <Link to="/">
                                        Find a Job
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Upload Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Salary Insight
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Resume Help
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Career Advice
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Practice Interviews
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}