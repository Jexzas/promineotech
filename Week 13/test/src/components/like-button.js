import React from 'react';

export default class LikeButton extends React.Component {
    render() {
        return React.createElement('button', {className: 'btn btn-primary'}, 'Like');
    }
}