import React, {Component} from 'react'
import request from 'superagent';

class MovieDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }
  }

  movie = async () => {
    let movie = await request
      .get(`https://city-explorer-backend.herokuapp.com/movies?&data%5Bsearch_query%5D=${this.props.location}`);
    console.log(movie.body);
    return movie.body;
  }

  render() {
    return (
      <section id={this.movie()}>
        
      </section>
    )
  }
}

export default MovieDB;