import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='navBar'>
            <ul className='noStyle'>
                <li className='listHeader'><a href=''><strong>Home</strong></a></li>
                <li className='listItem'><a href=''>Gallery</a></li>
                <li className='listItem'><a href=''>FAQ</a></li>
                <li className='listItem'><a href=''>About</a></li>
            </ul>
            </div>
        );

    }
}