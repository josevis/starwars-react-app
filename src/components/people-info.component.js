import React, { Component } from 'react';
import Cards from './jsx-components/Cards'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import '../App.css';

export default class PeopleInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personId: this.props.match.params.personId,
      peopleInfo: []
    }
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/${this.state.personId}`)
      .then(res => {
        this.setState({ peopleInfo: res.data })
      })
  }

  render() {
    return (
      <div className='App-header'>
        <Grid container justify="center">
          <Cards 
            name={this.state.peopleInfo.name}
            height={this.state.peopleInfo.height}
            mass={this.state.peopleInfo.mass}
            hair_color={this.state.peopleInfo.hair_color}
            eye_color={this.state.peopleInfo.eye_color}
            birth_year={this.state.peopleInfo.birth_year}
            gender={this.state.peopleInfo.gender}
          />
        </Grid>
      </div>
    );
  }
}