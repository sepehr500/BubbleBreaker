import React from 'react';
import { curry } from 'ramda';
import classNames from 'classnames';

import './card.component.scss';

class Card extends React.Component {
  classSlant = curry((left, center, right, current) => {
    switch (this.props.data.slant) {
      case ('L'):
        return `${left} ${current}`;
      case ('R'):
        return `${right} ${current}`;
      default:
        return `${center} ${current}`;
    }
  })

  render() {
    // CURRYING IS PRETTY SWEET
    const withLink = this.classSlant('hover-blue', 'hover-light-silver', 'hover-red')
    return (
      <div className="pa br3 pa2 ba b--black-10  mb3 truncate shadow-4">
        <div className="pb1 bb b--black-20">
          <img className="card-header-logo" src={this.props.logo} />
          <a
            href={this.props.data.siteUrl}
            className={withLink('b f4 black link pl2 word-wrap')}
            target="_blank"
          >
            {this.props.data.siteName}
          </a>
        </div>
        <div className="pt1">
          <a className={withLink("f3 black lh-copy link word-wrap")} href={this.props.data.articleLink} target="_blank">{this.props.data.articleTitle}</a>
        </div>
      </div>
    );
  }
}

export default Card;
