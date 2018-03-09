import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/npr.png';
import Card from '../components/Card/card.component';

var service = require('../services/sources.service');

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    service.getSources().then((items) => {
      this.setState({
        items: items
      });
    });
  }

  render() {
    if (this.state.items) {
      let cards  = this.state.items.map((item) => {
        return (
          <Card data={item} logo={logo} key={item.siteName} />
        )
      });
  
      return (
        <div>
          {cards}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default IndexPage;
