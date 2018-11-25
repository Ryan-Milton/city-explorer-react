import React, {Component} from 'react'
import request from 'superagent';

class DarkSky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    }
  }

  weather = async () => {
    let location =  await request
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({data: this.props.location});
    let weather = await request
      .get(`https://city-explorer-backend.herokuapp.com/weather?data%5Blatitude%5D=${location.body.latitude}&data%5Blongitude%5D=${location.body.longitude}`);
    console.log(weather.body);
  }

  render() {
    return (
      <section id={this.weather()}>
        
      </section>
    )
  }
}

export default DarkSky;