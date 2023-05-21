import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';

const SearchHistory = ({ searchHistory }) => {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchHistory: state.search.searchHistory,
  };
};

export default connect(mapStateToProps)(SearchHistory);
