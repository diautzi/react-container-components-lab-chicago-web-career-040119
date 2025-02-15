import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchItem: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL)
  }
  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input"> Search Movie Reviews </label>
          <input id="serach-input" type="text"/>
          <button >Submit</button>
        </form>
       </div>
    )
  }
}

export default SearchableMovieReviewsContainer
