var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{width: 100, height:100}}
          />
          <h4>Name: {this.props.name} </h4>
          <h5>Username: {this.props.username} </h5>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name="Tyler"
    username="something"
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
  document.getElementById('app')
);
