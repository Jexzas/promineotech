import React from 'react';
import Comment from './comment';
import LikeButton from './like-button';
import ReplyButton from './reply-button';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            count: 0
        };
    }
    render() {
        let comments;
        if (this.state.comments) {
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);    
        }
        return (
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    Username and Time
                </div>
                <div className='card-body'>
                    {this.state.content}
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <ReplyButton />
                    {comments}
                </div>
            </div>

        )
    }

}