import React from 'react';

import './card.component.scss';

class Card extends React.Component {
  getBoxShadow(slant) {
    switch (slant) {
      case ('L'):
        return { boxShadow: '4px 4px 10px -2px rgba(0, 78, 255, 0.2)' };
        break;
      case ('R'):
        return { boxShadow: '4px 4px 10px -2px rgba(218, 59, 59, 0.2)' };
        break;
      default:
        return { boxShadow: '4px 4px 10px -2px rgba(0, 0, 0, 0.2)' };
        break;
    }
  }

  getTitleHoverColor(slant) {
    switch (slant) {
      case ('L'):
        return 'card-header-text-left';
        break;
      case ('R'):
        return 'card-header-text-right';
        break;
      default:
        return 'card-header-text-center';
        break;
    }
  }

  getLinkHoverColor(slant) {
    switch (slant) {
      case ('L'):
        return 'card-body-link-left';
      case ('R'):
        return 'card-body-link-right';
      default:
        return 'card-body-link-center';
    }
  }

  render() {
    return (
      <div className="pa br3 pa2 ba mb3 truncate" style={this.getBoxShadow(this.props.data.slant)}>
        <div className="card-header">
          <img className="card-header-logo" src={this.props.logo} />
          <a href={this.props.data.siteUrl} className="word-wrap" target="_blank">{this.props.data.siteName}</a>
        </div>
        <div className="pt1">
          <a className="f3 link word-wrap" href={this.props.data.articleLink} target="_blank">{this.props.data.articleTitle}</a>
        </div>
      </div>
    );
  }
}

export default Card;
