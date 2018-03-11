import React from 'react';
import Link from 'gatsby-link';

import './header.component.scss';

class Header extends React.Component {
  render() {
    return (
      <div style={{ gridArea: 'header' }} className="background">
        <div className="setup">
          <a href="/" className="text">Gatsby</a>
        </div>
      </div>
    );
  }
}

export default Header;
