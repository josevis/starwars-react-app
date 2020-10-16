import React, { Component } from 'react'
import axios from 'axios'
import Table1 from './jsx-components/Table'
import Pagination from '@material-ui/lab/Pagination'
import '../App.css'

export default class People extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      currentPage: 1,
      // pages: 0, //pagination
      // incrementIndex: 0 //pagination
    }
  }

  // //pagination
  // handleChange = (event, index) => {
  //   this.setState({
  //     currentPage: index
  //   })
  //   axios.get('https://swapi.dev/api/people/',{
  //     params: {
  //       page: this.state.currentPage
  //     }
  //   })
  //     .then(res => {
  //       this.setState({ 
  //         people: res.data.results, 
  //         incrementIndex: (this.state.currentPage * 10) - 10,
  //       })

  //     })
  // };

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/', {
      params: {
        page: this.state.currentPage
      }
    })
      .then(res => {
        this.setState({
          people: res.data.results,
          // pages: Math.floor((res.data.count) / 10) //pagination
        })
      })
  }

  render() {
    return (
      <div className="App-header">
        <Table1 rows={this.state.people} index={this.state.incrementIndex} />
        {/* <Pagination count={this.state.pages} onChange={this.handleChange} handleOn/> */}
      </div>
    )
  }
}
