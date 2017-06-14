var React = require('react');
var Popular = require('./Popular');
var Title = require('./Title');

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Title />
       <Popular />
      </div>
    )
  }
}

module.exports = App;
