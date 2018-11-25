import React, { Component } from 'react';
import './App.css';
// import request from 'superagent';

import Title from './modules/title.js';
import Form from './modules/form.js';
import GoogleMap from './modules/google-map.js';
import DarkSky from './modules/dark-sky.js';
import Yelp from './modules/yelp.js';
import Meetup from './modules/meetup.js';
import MovieDB from './modules/moviedb.js';
import Hiking from './modules/hiking.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      latitude: '',
      longitude: '',
    }
  }

  handleFormSubmit = async (stuffFromTheForm) => {
    let formStuff = await stuffFromTheForm;
    // console.log(`This ->${formStuff}<- came from the form`);
    this.setState({ location: formStuff });
    // console.log(this.state.location);
  }

  locationData = async (stuffFromGoogs) => {

    let stuffs = await stuffFromGoogs;
    console.log(stuffs);
    let stuffsBody = stuffs.result.body
    let lat = stuffsBody.latitude;
    let long = stuffsBody.longitude;
    console.log('Result from backend for location query: ',stuffsBody);
    console.log(`${this.state.location} latitude: ${lat}`);
    console.log(`${this.state.location} longitude: ${long}`);
    
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form handleFormSubmit={this.handleFormSubmit}/>
        <GoogleMap locationData={this.locationData} location={this.state.location}/>
        {/* <DarkSky location={this.state.location}/>
        <Yelp location={this.state.location}/>
        <Meetup location={this.state.location}/>
        <MovieDB location={this.state.location}/>
        <Hiking location={this.state.location}/> */}
      </div>
    );
  }
}

export default App;
