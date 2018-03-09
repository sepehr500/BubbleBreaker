import React from 'react';
import Link from 'gatsby-link';

import './card.component.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  getBoxShadow(slant) {
    switch(slant) {
      case('L'):
        return { boxShadow: '4px 4px 10px -2px rgba(0, 78, 255, 0.2)' };
        break;
      case('R'):
        return { boxShadow: '4px 4px 10px -2px rgba(255, 0, 0, 0.2)' };
        break;
      default:
        return { boxShadow: '4px 4px 10px -2px rgba(0, 0, 0, 0.2)' };
        break;
    }
  }

  getTitleHoverColor(slant) {
    switch(slant) {
      case('L'):
        return 'card-header-text-left';
        break;
      case('R'):
        return 'card-header-text-right';
        break;
      default:
        return 'card-header-text-center';
        break;
    }
  }

  getLinkHoverColor(slant) {
    switch(slant) {
      case('L'):
        return 'card-body-link-left';
        break;
      case('R'):
        return 'card-body-link-right';
        break;
      default:
        return 'card-body-link-center';
        break;
    }
  }

  render() {
    return (
      <div className="card" style={this.getBoxShadow(this.props.data.slant)}>
        <div className="card-header">
          <img className="card-header-logo" src={this.props.logo} />
          <a href={this.props.data.siteUrl} className={this.getTitleHoverColor(this.props.data.slant)} target="_blank">{this.props.data.siteName}</a>
        </div>
        <div className="card-body">
          <a className={this.getLinkHoverColor(this.props.data.slant)} href={this.props.data.articleLink} target="_blank">{this.props.data.articleTitle}</a>
        </div>
      </div>
    )
  }
}

export default Card;
