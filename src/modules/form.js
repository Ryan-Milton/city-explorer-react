import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setState({ location: event.target.location.value});
    await this.props.handleFormSubmit(this.state.location);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='location' placeholder='City, State'/>
        <button type="submit">Explore!</button>
      </form>
    );
  };
}

export default Form;