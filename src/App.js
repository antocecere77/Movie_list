import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list';
import NavBar from './components/navbar';

const APIKEY = '802ea4db'
const APIURL = 'http://www.omdbapi.com'

function fetchMovies(search = '') {
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

  searchMovies = (term = '') => {
    if(term.length<3) {
      return
    }

    fetchMovies(term).then(res => {
      //console.log(res);
      this.setState({
        movies: res.Search,
        totalCount: res.totalCount
      })
    });
  }

  componentDidMount() {
    //this.searchMovies('back to the future')
  }

  render() {
    return (
      <React.Fragment>
      <NavBar onSearchTerm={this.searchMovies}/>
      
      <div className="container">
       <h1>My favorite movies</h1>
        <VideoList movies={this.state.movies}/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
