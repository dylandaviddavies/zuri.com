import React from "react";
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <div className="header__content">
            <img className="header__img" src={logo} alt="Zuri" />
            <div className="header__search">
                <i className="material-icons header__search__icon" aria-hidden="true">search</i>
                <input className="header__search__input" type="text" placeholder="Search for jobs" />
            </div>
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
  );
}