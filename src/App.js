import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import awsconfig from './aws-exports';
import Auth from './Auth';

Amplify.configure(awsconfig);

class App extends Component {

  render() {
    return (
      <Auth/>
    );
  }
}

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  hideSignUp: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'email'
    },
    {
      label: 'First Name',
      key: 'given_name',
      required: true,
      displayOrder: 2,
      type: 'text'
    },
    {
      label: 'Last Name',
      key: 'family_name',
      required: true,
      displayOrder: 3,
      type: 'text'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password'
    },
  ]
};
const usernameAttributes = 'Email';

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes,
  theme: {
    button: { backgroundColor: '#309ab1', fontWeight: 'bold', borderRadius: '4px', margin: '0 auto' },
    a: { color: '#309ab1'}
  }
});