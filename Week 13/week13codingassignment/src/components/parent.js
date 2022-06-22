import React from 'react';
import LoginForm from './login-form';
import Navigation from './navigation';

export default class Parent extends React.Component {
    render() {
        return (
            <div className='parent'>
                <Navigation></Navigation>
                <LoginForm></LoginForm>
            </div>
        );
    }

}