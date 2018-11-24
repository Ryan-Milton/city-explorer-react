import React, {Component} from 'react'
import request from 'superagent';

class Yelp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }
  }

  yelp = async () => {
    let yelp = await request
      .get(`https://city-explorer-backend.herokuapp.com/yelp?data%5Bsearch_query%5D=${this.props.location}`);
    console.log(yelp.body);
    return yelp.body;
  }

  render() {
    return (
      <section id={this.yelp()}>
        
      </section>
    )
  }
}

export default Yelp;