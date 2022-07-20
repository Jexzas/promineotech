import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='parentContainer'>
            <div className='loginForm'>
            <h3>Log In</h3>
            <input type='text' placeholder='UserName'></input>
            <input type='text' placeholder='Password'></input>
            <button type='button'>Press Here</button>
            </div>
            </div>
        );
    }
}