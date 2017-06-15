var React = require('react');
var RLink = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
      return(
        <div className='home-container'>
          <h1>Start your GitHub Battle</h1>
            <RLink className='btn btn-md btn-success' to="/battle">
              Battle now!
            </RLink>
        </div>
      )
  }
}

module.exports = Home;
