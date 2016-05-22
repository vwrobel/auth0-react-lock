[![Auth0](https://cloudup.com/c2evgl2cz3j+)](http://auth0.com)

# React Lock

Reusable React component for [Auth0](http://auth0.com)'s [Lock Widget](https://github.com/auth0/lock).

[Auth0](https://auth0.com) is an authentication broker that supports social identity providers as well as enterprise identity providers such as Active Directory, LDAP, Google Apps, Salesforce.

[Lock Widget](https://github.com/auth0/lock) is a _drop and use_ widget for Auth0 which comes with most authentication options that you can think of:

[![Auth0](https://cloudup.com/ceeo-qIlCTd+)](http://auth0.com)

## Installation

```bash
npm install --save auth0-react-lock
```

## How to use
The component is what you are used to if you ever used React but this time with options to configure Lock and callbacks to handle authentication.

### Example:
#### Redirect Mode
```js
showLock(){
    this.refs.lock1.showLock();
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
```

#### Popup Mode
```js
showLock(){
    this.refs.lock1.showLock(function(err, profile){
      if(err) console.log(err);
      console.log(profile);
    });
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
        popup={true}
        />
        <button onClick={this.showLock.bind(this)}>Show</button>
    </div>
  );
}
```

#### Embedded Widget

```js
// If the contaaner property is set, lock will be automatically embedded
<Lock
  container={"container-id"}
  clientID={Env.CLIENT_ID}
  domain={Env.DOMAIN}
  ref={"lock1"}
  connections={['google-oauth2', 'facebook']}
  socialBigButtons={false}
  popup={true}
  />
```

#### Lock Instance

You can also grab an instance of lock:

```js
componentDidMount() {
  this.lock = this.refs.lock1.getLock();
  // And also grab Auth0.js instance
  this.auth0js = this.lock.getClient();
}
```

## Example

The example to this component is implicit to the project.

```bash
# Install webpack-dev-server
npm install --g webpack-dev-server

# Clone
git clone https://github.com/auth0/auth0-react-lock

# Install dependencies
npm install

# Run Example
webpack-dev-server
```

## Contributing

To run the tests:

Run `grunt`.


## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
