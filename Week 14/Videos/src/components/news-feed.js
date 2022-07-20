import React from 'react';
import Post from './post';


export default class NewsFeed extends React.Component {
    render() {
        let comments = [
            {
                content: 'This is my comment',
                username: 'Tommy',
                date: '12-12-18'
            },
            {
                content: 'This is my comment',
                username: 'Sammy',
                date: '12-12-18'
            },
            {
                content: 'This is my comment',
                username: 'Sally',
                date: '12-12-18'
            }
        ]
        return (
            <div className='container'>
                <Post {...{comments: comments, content: 'post'}}/>
                <Post {...{content: 'another post'}}/>
            </div>

        );
    }
}