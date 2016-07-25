import React from 'react';
import Auth0Lock from 'auth0-lock';
import ExecutionEnvironment from 'exenv';

class Lock extends React.Component {


  constructor(props){
    super(props);
    const clientID = props.clientID || props.clientId;
    if(!clientID) {
      throw Error("Client ID is strictly required");
    }
    const domain = props.domain;
    
    if(ExecutionEnvironment.canUseViewport){
      this.lock = new Auth0Lock(clientID, domain);
      this.hash = this.lock.parseHash();
      this.handleHash(this.hash, props.hashHandler);
    }
    this.showLock = this.showLock.bind(this);
    this.getLock = this.getLock.bind(this);
  }

  handleHash(hash, handlerFn) {
    if (hash) {
      if (hash.error) {
        throw Error (`There was an error logging in: ${hash.error}`);
      } else {
        this.lock.getProfile(hash.id_token, handlerFn);
      }
    }
  }

  getLock() {
    return this.lock;
  }

  showLock(cb){
    if(this.props.popup){
        if (typeof cb !== 'function') throw Error("Callback must be a function");
        this.lock.show(this.props, cb);
    } else {
      this.lock.show(this.props);
    }
  }

  render () {
    const container = this.props.container;
    if(container){
      return (
        <div id={container}></div>
      );
    }
    return false;
  }
}

Lock.propTypes = {
  domain: React.PropTypes.string.isRequired,
  clientID: React.PropTypes.string,
  clientId: React.PropTypes.string
};

export default Lock;
