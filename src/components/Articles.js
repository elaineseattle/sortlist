import React, { useEffect, useState } from 'react';

export const recent = 'recent';
export const upvote = 'upvote';

function Articles({ articles, filter }) {
  // Create a copy of the articles array for sorting
  const mostUpvotedArticles = [...articles].sort((a, b) => b.upvotes - a.upvotes);
  const mostRecentArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  // State to hold the filtered data
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Update the filtered data when the filter or articles change
  useEffect(() => {
    if (filter === upvote) {
      setFilteredArticles(mostUpvotedArticles);
    } else {
      setFilteredArticles(mostRecentArticles);
    }
  }, [filter, articles]);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((article) => (
            <tr data-testid="article" key={article.title}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
