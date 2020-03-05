import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { connect } from 'react-redux';
import { setUserProfile } from './actions/user';
import { getMember } from './graphql/queries';
import { createMember } from './graphql/mutations';
import Routes from './Routes';
import Button from './components/Button';

class AuthRoutes extends Component {

  componentDidMount = async () => {
    try {
      // get cognito user values from current auth session
      const {
        idToken: {
          payload: {
            'cognito:groups': groups,
            given_name: firstName,
            family_name: lastName,
            email,
            sub: id
          }
        }
      } = await Auth.currentSession();

      this.setState({ groups });

      console.log({ id, email, firstName, lastName, groups });

      const {
        data: {
          getMember: existingMember
        }
      } = await API.graphql(graphqlOperation(getMember, { id }));

      console.log({existingMember});

      if (existingMember) {
        // save existingMember as user to redux app state
        this.props.setUserProfile(existingMember);
      } else {

        // create input from destructured idToken
        const input = { id, email, firstName, lastName };
        console.log(input)

        const {
          data: {
            createMember: newMember
          }
        } = await API.graphql(graphqlOperation(createMember, { input }));

        console.log({newMember});
        // save newMember as user to redux app state
        this.props.setUserProfile(newMember);
      }
    }
    catch(e) {
      console.log(e);
    }
  }

  signOut = async () => {
    await Auth.signOut();
  }

  render() {
    const { groups } = this.state || {};
    return (
      <div className="App">
        <Button
          label={'SIGN OUT'}
          handleClick={this.signOut}
        />
        <Routes groups={groups}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setUserProfile: (profile) => dispatch(setUserProfile(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoutes)