import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/npr.png';
import Card from '../components/Card/card.component';
import {fetchHeadlines} from '../services/fetchHeadlines';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetchHeadlines().then((items) => {
      this.setState({
        items
      });
    });
  }

  render = () => ( 
    <div> {this.state.items && 
      this.state.items.map((item) => (
          <Card data={item} logo={logo} key={item.siteName} />
        )
      ) }
    </div>
    )
}

export default IndexPage;
