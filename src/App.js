import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

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
    }
  }

  handleFormSubmit = async (stuffFromTheForm) => {
    let formStuff = await stuffFromTheForm;
    console.log(`This ->${formStuff}<- came from the form`);
  }

  locationData = async (query) => {
    let results = await request
      .get('/location')
      .query({query: this.state.location});
    console.log(results);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form handleFormSubmit={this.handleFormSubmit}/>
        <GoogleMap locationData={this.locationData}/>
        <DarkSky />
        <Yelp />
        <Meetup />
        <MovieDB />
        <Hiking />
      </div>
    );
  }
}

export default App;
