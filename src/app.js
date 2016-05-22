import React from 'react';
import ReactDOM from 'react-dom';

import Env from '../env';
import Lock from './components/lock.component';

let div = document.createElement('div');

document.body.appendChild(div);

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isShown: false
      }
  }

  componentDidMount() {
    this.refs.lock1.getLock();
  }

  showLock(){
      this.refs.lock1.showLock(function(err, profile){
        if(err) console.log(err);
        console.log(profile);
      });
  }

  hashHandler(err, profile){
    if(err) console.log(err);
    console.log(`:) ${profile}`)
  }

  render() {
    return (
      <div>
        <Lock
          clientID={Env.CLIENT_ID}
          domain={Env.DOMAIN}
          ref={"lock1"}
          connections={['google-oauth2', 'facebook']}
          socialBigButtons={false}
          hashHandler={this.hashHandler}
          />
          <button onClick={this.showLock.bind(this)}>Show</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, div);
