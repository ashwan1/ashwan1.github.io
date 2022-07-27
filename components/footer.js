import React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <footer className="footer mt-5 has-top-border">
          <div className="columns is-size-7">
            <div className='column is-half'>
              &copy; 2022 Personal website of Ashwani Pandey <br />
              Powered by <a href='https://idyll-lang.org/docs'>Idyll</a>
            </div>
            <div className='column has-text-right-tablet is-half'>
            <a className='pl-2' href='https://github.com/ashwan1' target='_blank'><img src="/static/images/github.svg" width="25" height="25" /></a>
            <a className='pl-2' href='https://linkedin.com/in/ashwan1' target='_blank'><img src="/static/images/linkedin.svg" width="25" height="25" /></a>
            <a className='pl-2' href='https://twitter.com/4shw4n1' target='_blank'><img src="/static/images/twitter.svg" width="25" height="25" /></a>
            </div>
          </div>
        </footer>
      );
    }
}

export default Footer;