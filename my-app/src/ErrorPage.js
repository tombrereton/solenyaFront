import React, { Component } from 'react';
import './ErrorPage.css';


class ErrorPage extends Component {
  render() {
    return (
      <div className="ErrorPage">
        <header className="EP-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
          Sorry, Something Went Wrong!
        </header>
        <p className="EP-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}         
        </p>
      </div>
    );
//     <Router>
//     <Route path='/errorpage' component={ErrorPage} />
    
// ReactDOM.render(<ErrorPage />, document.getElementById('ErrorPage'))
//   </Router>

  }

}


export default ErrorPage;
