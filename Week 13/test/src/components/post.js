import React from "react";
import ReplyButton from "./reply-button";   
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return e('div', 
            {className: 'card w-75'},
            e('div',
            {className: 'card-header bg-success text-white'},
            'Username and Time'            
            ),
            e('div',
                {className: 'card-body'},
                'Comment Content'
            ),
            e('div',
                {className: 'card-footer'},
                e(LikeButton, {}, null),
                e('span', {}, ' '),
                e(ReplyButton, {}, null),
                e('br', {}, null),
                e(Comment, {}, null),
                e(Comment, {}, null)
            )
        );
    }



}