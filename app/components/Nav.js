var React = require('react');
// var RLink = require('react-router-dom').Link; use this if you don't need to show what is active
var NLink = require('react-router-dom').NavLink;

function Nav(){
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">GHBa</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <NLink exact activeClassName='active' to='/'>
                  Home
              </NLink>
            </li>
            <li>
              <NLink activeClassName='active' to='/battle'>
                  Battle
              </NLink>
            </li>
            <li>
              <NLink activeClassName='active' to='/popular'>
                  Popular
              </NLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
           <Route path = '/popular' component={Popular}/>
        </div>
      </Router>
    )
  }
}

module.exports = Nav;
