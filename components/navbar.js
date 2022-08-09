import React from 'react';

class NavBar extends React.Component {

  state = { isActive: false };

  componentDidMount(){
    try {
      (function(w, d, o) {
        const faviconLinkNode = d.createElement('link');
        const firstONode = d.getElementsByTagName(o)[0];
        faviconLinkNode.rel = 'icon';
        faviconLinkNode.type = 'image/x-icon';
        faviconLinkNode.href = '/favicon.ico'
        firstONode.parentNode.insertBefore(faviconLinkNode, firstONode);
    })(window, document, 'link');
    } catch (error) {
      console.log('Could not load favicon: ' + error);
    }
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <nav className="navbar is-fixed-top is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">A<span>shwan</span>i</a>
          <a className={"navbar-burger " + (isActive ? "is-active" : null)} data-target="navbarMenu" 
            onClick={() => this.setState({ isActive: !this.state.isActive })}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="navbarMenu" className={"navbar-menu " + (isActive ? "is-active" : null)}>
          <div className="navbar-end">
            {/*<a className="navbar-item" href='/'>About</a>*/}
            <a className="navbar-item" href='/explorables/'>Explorables</a>
            {/*<a className="navbar-item">Portfolio</a>*/}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;