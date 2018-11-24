import React, {Component} from 'react'
import request from 'superagent';
// import { GOOGLE_API_KEY } from '../../.env';
require('dotenv').config();


class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationData: '',
      map: ''
    }
  }

  data = async () => {
    console.log(`Location Data ${this.props.location}`);
    let result = await request
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({data: this.props.location});
    await this.props.locationData({ result });
    return result;
  }

  map = async () => {
    let result = await this.data();
      let map = await request
        .get(`https://maps.googleapis.com/maps/api/staticmap?center=${result.body.latitude},${result.body.longitude}&zoom=13&size=600x300&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`);
    let imgURL = map.req.url;
    console.log(imgURL);
    return imgURL;
  }

  render() {
    return (
      <div id={this.data()}>
        <img src={this.map()} alt="A map"></img>
      </div>
    );
  }
}

export default GoogleMap;