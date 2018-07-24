import React, { Component } from 'react'
import SearchBar from './SearchBar.css'

const sortByOptions = {
 'Best Match': 'best_match',
 'Highest Rated' : 'rating',
 'Most Reviewed'  : 'review_count',
}

class SearchBar extends Component {
  render(){
    return(
<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {SearchBar.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
    )
  }

  renderSortByOptions() {
    let sortByOption = ''
   return Object.keys(sortByOptions).map(sortByOption => {
     let sortByOptionValue = sortByOptions[sortByOption]
     return(

         <li key={sortByOptionValue}>{sortByOption}</li>

     )})
 }
}

export default SearchBar
