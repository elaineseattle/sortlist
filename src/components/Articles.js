import React, { useEffect, useState } from 'react';

export const recent = 'recent';
export const upvote = 'upvote';

function Articles({ articles, filter }) {

    const mostUpvotedArticles = articles.concat().sort((a, b) => {
        if (a.upvotes > b.upvotes) {
            return -1;
        }
        if (a.upvotes < b.upvotes) {
            return 1;
        }
        return 0;
    });

    const mostRecentArticles = articles.concat().sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        if (aDate > bDate) {
            return -1;
        }
        if (aDate < bDate) {
            return 1;
        }
        return 0;
    });


    const [data, setData] = useState([]);
    useEffect(() => {
        if (filter === upvote) {
            const newData = mostUpvotedArticles;
            setData([...newData]);
        } else {
            const newData = mostRecentArticles;
            setData([...newData]);
        }
    }, [filter, articles])

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
                    {/* in JSX we are going to start by adding curly braces
                      the curly braces are a special syntax to let the 
                      JSX parser know that it needs to interpret the part as JavaScript
                      Array.map() is going to loop through the array of data
                      give you access of each item in the array in the callback function
                      in the calback function you're going to return the JSX elements to render the UI e.g. table/list
                      any time you render HTML/JSX elements in Array.map() you must pass the key prop */}
                    {data.map((data) => {
                        return (
                            <tr data-testid="article" key={data.title}>
                                <td data-testid="article-title">{data.title}</td>
                                <td data-testid="article-upvotes">{data.upvotes}</td>
                                <td data-testid="article-date">{data.date}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );

}

export default Articles;
