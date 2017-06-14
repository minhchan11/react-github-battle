var React = require('react');

const divStyle = {
  textAlign: 'center'
};

function Title(props){
  return (
    <div className="jumbotron">
      <h1
      style={divStyle}
      >
      Git Hub Battle
      </h1>
    </div>
  )
}

module.exports = Title;
