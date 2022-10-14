import React, { useState, useCallback } from 'react';
import './App.css';
import 'h8k-components';
import { recent, upvote } from './components/Articles'
import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [filter, setFilter] = useState('recent');

    const switchToFilter = useCallback((newFilter) => {
        if (filter !== newFilter) {
            setFilter(newFilter)
        }
    }, [filter])

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" onClick={() => switchToFilter(upvote)} className="small">Most Upvoted</button>
                <button data-testid="most-recent-link" onClick={() => switchToFilter(recent)} className="small">Most Recent</button>
            </div>
            <Articles articles={articles} filter={filter} />
        </div>
    );

}

export default App;
