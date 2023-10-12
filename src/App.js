import React, { useState, useCallback } from 'react';
import './App.css';
import 'h8k-components';
import Articles from './components/Articles';
import { recent, upvote } from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
  // State for the currently selected filter
  const [filter, setFilter] = useState('upvote');

  // Function to switch the filter
  const switchToFilter = useCallback((newFilter) => {
    if (filter !== newFilter) {
      setFilter(newFilter);
    }
  }, [filter]);

  return (
    <div className="App">
      {/* Header */}
      <h8k-navbar header={title}></h8k-navbar>

      {/* Filter buttons */}
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
        <button data-testid="most-upvoted-link" onClick={() => switchToFilter(upvote)} className="small">Most Upvoted</button>
        <button data-testid="most-recent-link" onClick={() => switchToFilter(recent)} className="small">Most Recent</button>
      </div>

      {/* Render the Articles component */}
      <Articles articles={articles} filter={filter} />
    </div>
  );
}

export default App;
