
import React, {Component} from 'react'
import { NavLink, Link, Route } from 'react-router-dom'

const rootDir = '/';

class TopNav extends Component {

    // Click
    topNavClick(e) {
        var myNavbar = document.getElementById('myNavbar');
        var navAria = myNavbar.getAttribute('aria-expanded');
        if(navAria === 'true'){
            myNavbar.className = 'navbar-collapse';
            myNavbar.className += ' collapse';
        }
    }

    render() {
      let topNav = [
          <nav className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button"
                          className="navbar-toggle"
                          data-toggle="collapse"
                          data-target="#myNavbar">

                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                    <Link to={rootDir} className="navbar-brand">WebSite</Link>
                  </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="links nav navbar-nav">
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "about"}
                                onClick={this.topNavClick}
                                data-target="#">About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "topics"}
                                onClick={this.topNavClick}
                                data-target="#">Topics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "contact"}
                                onClick={this.topNavClick}
                                data-target="#">Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "todo"}
                                onClick={this.topNavClick}
                                data-target="#">Todo
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="links nav navbar-nav navbar-right">
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "signup"}
                                onClick={this.topNavClick}
                                data-target="#">
                                <span className="glyphicon glyphicon-user"></span> Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active"
                                to={rootDir + "login"}
                                onClick={this.topNavClick}
                                data-target="#">
                                <span className="glyphicon glyphicon-log-in"></span> Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
              </div>
          </nav>
      ];

      return (
        <div className="top_menu">
          {topNav}
        </div>
      );
    }
}
export default TopNav