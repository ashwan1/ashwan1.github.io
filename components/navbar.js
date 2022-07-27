import React from 'react';

class NavBar extends React.Component {

  state = { isActive: false };

  render() {
    const isActive = this.state.isActive;
    return (
      <nav className="navbar is-fixed-top is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://ashwan1.github.io/site/">A<span>shwan</span>I</a>
          <a className={"navbar-burger " + (isActive ? "is-active" : null)} data-target="navbarMenu" 
            onClick={() => this.setState({ isActive: !this.state.isActive })}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="navbarMenu" className={"navbar-menu " + (isActive ? "is-active" : null)}>
          <div className="navbar-end">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Blog</a>
            <a className="navbar-item">Portfolio</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;