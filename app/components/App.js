var React = require('react');
var Battle = require('./Battle');
var Results = require('./Results');
var Home = require('./Home');
var Popular = require('./Popular');
var Title = require('./Title');
var Nav = require('./Nav');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
          <Nav />
          <Switch>
           <Route exact path = '/' component={Home}/>
           <Route exact path = '/battle' component={Battle}/>
           <Route path = '/battle/results' component={Results}/>
           <Route path = '/popular' component={Popular}/>
           <Route render={function(){
             return <h5>404 not found</h5>
           }}
           />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
