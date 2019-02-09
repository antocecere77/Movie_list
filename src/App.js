import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list';

const APIKEY = '802ea4db'
const APIURL = 'http://www.omdbapi.com'

function fetchMovies(search = 'back to the future') {
  return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalCount: 0
    }
  }

  componentDidMount() {
    fetchMovies().then(res => {
      //console.log(res);
      this.setState({
        movies: res.Search,
        totalCount: res.totalCount
      })
    });
  }

  render() {
    return (
      <div className="container">
       <h1>My favorite movies</h1>
   
        <VideoList movies={this.state.movies}/>
       
      </div>
    );
  }
}

export default App;
