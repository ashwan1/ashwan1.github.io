import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar is-fixed-top is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://ashwan1.github.io/site/">A<span>shwan</span>I</a>
          <a class="navbar-burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Blog</a>
            <a class="navbar-item">Portfolio</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;