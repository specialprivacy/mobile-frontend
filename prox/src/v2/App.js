import React, {Component} from 'react';
import './App.css';
import {CardMedia, CardHeader, CardText, CardActions} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import texts from './texts.json';
import request from 'superagent'

import PolicyCard from './PolicyCard';

function areEqualArrays (a, b) {
  return Array.isArray(a) && Array.isArray(b) &&
    a.length === b.length &&
    a.reduce((res, item) => res && b.includes(item), true);
}

class App extends Component {
    constructor (props) {
      super(props);

      this.state = {
        policies: [],
        serverPolicies: []
      }

      this.updatePolicies = this.updatePolicies.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.onGranted = this.onGranted.bind(this);
      this.canUpload = this.canUpload.bind(this);
      this.loadAllPolicies = this.loadAllPolicies.bind(this);
      this.loadUserPolicies = this.loadUserPolicies.bind(this);
    }

    componentDidMount () {
      // Load the list of policies and the list of user policies
      this.loadAllPolicies((err) => {
        if (!err) this.loadUserPolicies()
      })
    }

    loadAllPolicies (cb) {
      if (!cb) cb = () => {}
      request
        .get('/policies')
        .set('accept', 'application/json')
        .end((err, res) => {
          if (err) {
            if (err.status === 401 && err.response.header.location) {
              console.log('Redirecting');
              console.log(err.response);
              return window.location.assign(err.response.header.location);
            }
            console.error('Failed to get policy list');
            console.error(err);
            this.setState(prevState => {
              prevState.policies = [];
              return prevState;
            })
            return cb(err);
          }
          this.setState((prevState) => {
            prevState.policies = res.body.policies;
            return prevState;
          });
          cb(null)
        });
    }

    loadUserPolicies (cb) {
      if (!cb) cb = () => {}
      request
        .get('/users/current/policies')
        .set('accept', 'application/json')
        .end((err, res) => {
          if (err) {
            if (err.status === 401 && err.response.header.location) {
              return window.location.assign(err.response.header.location);
            }
            console.error('Failed to get user policies');
            console.error(err);
            this.setState(prevState => {
              prevState.serverPolicies = [];
              return prevState;
            })
            return cb(err);
          }
          this.setState(prevState => {
            prevState.serverPolicies = res.body.policies
              .map(item => item.id)
              .sort()
            prevState.serverPolicies
              .forEach(item => {
                const index = prevState.policies.findIndex(pol => pol.id === item);
                prevState.policies[index].granted = true;
              });
            return prevState;
          });
          return cb(null);
        });
    }

    onGranted (id, e, isGranted) {
      const index = this.state.policies.findIndex(item => item.id === id)
      this.setState(prevState => {
        prevState.policies[index].granted = isGranted
        return prevState;
      })
    }

    canUpload () {
      const localPolicies = this.state.policies
        .filter(item => item.granted)
        .map(item => item.id)
        .sort();
      console.log(`localPolicies: ${localPolicies}`);
      console.log(`serverPolicies: ${this.state.serverPolicies}`);
      return !areEqualArrays(localPolicies, this.state.serverPolicies);
    }

    updatePolicies () {
      // TODO: actually implement the backend call
      console.log("Do an API call to update the policies in the backend")
      const localPolicies = this.state.policies
        .filter(item => item.granted)
        .map(item => item.id)
      const payload = {
        user: {
          name: null,
          policies: localPolicies
        }
      }
      request
        .put('/users/current')
        .send(payload)
        .end((err, res) => {
          if (err) {
            console.error('Failed to update policies')
            console.error(err)
            return
          }
          console.log('Updated policies')
          this.loadUserPolicies()
        })
    };

    render () {
        const color = "rgb(1, 166, 155)";
        const colorTwo = "rgb(238, 13, 137)";

        const cards = this.state.policies.map(policy => <PolicyCard
          key={policy.id}
          title={policy.title}
          explanation={policy.explanation}
          boxlabel={texts.boxlabel}
          onGranted={this.onGranted.bind(this, policy.id)}
          granted={policy.granted}
        />);

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-12" style={{padding: 0}}>
                        <CardMedia>
                            <img className="special-logo" src="images/special_logo_alpha.png" alt=""/>
                        </CardMedia>
                        <CardText>
                            <h1 style={{marginTop: 0, color: color}}>{texts.title}</h1>
                            <p>{texts.welcomeText}</p>
                            <p><small>{texts.welcomeSmallText}</small></p>
                            {cards}
                        </CardText>
                        <CardActions style={{textAlign: "right"}}>
                            <RaisedButton
                              primary={true}
                              label="Update"
                              onClick={this.updatePolicies}
                              disabled={!this.canUpload()}
                            />
                        </CardActions>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
