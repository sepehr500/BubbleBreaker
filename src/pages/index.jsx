import React from 'react';
import Link from 'gatsby-link';
import { groupBy, prop } from 'ramda';

import logo from '../assets/npr.png';
import Card from '../components/Card/card.component';
import { fetchHeadlines } from '../services/fetchHeadlines';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
  }

  componentWillMount() {
    fetchHeadlines().then((items) => {
      this.setState({
        items,
      });
    });
  }

  renderCard = (item) => <Card data={item} logo={logo} key={item.siteName} />

  render() {
    const groupedBySlant = this.state.items ? groupBy(x => x.slant, this.state.items) : null;
    return [
        <div style={{gridArea: 'L'}}>
        <h1>L</h1>
        {groupedBySlant && groupedBySlant.L.map(this.renderCard) }
        </div>,
        <div style={{gridArea: 'C'}}>
        <h1>C</h1>
        {groupedBySlant && groupedBySlant.C.map(this.renderCard) }
        </div>,
        <div style={{gridArea: 'R'}}>
        <h1>R</h1>
        {groupedBySlant && groupedBySlant.R.map(this.renderCard) }
        </div>
    ];
  }
}

export default IndexPage;
