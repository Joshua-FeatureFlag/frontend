import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function AuthContainer() {
    const handleLogin = (email, password) => {
        // Handle login
    };

    const handleSignUp = (email, password) => {
        // Handle sign-up
    };

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
            <SignUpForm onSignUp={handleSignUp} />
        </div>
    );
}

export default AuthContainer;
