import React, {Component} from 'react'
import request from 'superagent';

class Hiking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }
  }

  hiking = async () => {
    let location =  await request
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({data: this.props.location});
    let hiking = await request
      .get(`https://city-explorer-backend.herokuapp.com/trails?data%5Bid%5D=${location.body.id}&data%5Bsearch_query%5D=${this.props.location}`);
    console.log(hiking.body);
    return hiking.body;
  }

  render() {
    return (
      <section id={this.hiking()}>
        
      </section>
    )
  }
}

export default Hiking;