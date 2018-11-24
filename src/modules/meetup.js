import React, {Component} from 'react'
import request from 'superagent';

class Meetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }
  }

  meetup = async () => {
    let location =  await request
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({data: this.props.location});
    let meetup = await request
      .get(`https://city-explorer-backend.herokuapp.com/meetups?data%5Bid%5D=${location.body.id}&data%5Bsearch_query%5D=${this.props.location}`);
    console.log(meetup.body);
    return meetup.body;
  }

  render() {
    return (
      <section id={this.meetup()}>
        
      </section>
    )
  }
}

export default Meetup;