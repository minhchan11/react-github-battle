var React = require('react');
var PropTypes = require('prop-types');
var RLink = require('react-router-dom').Link;

function PlayerPreview(props){
  return(
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h5 className='username'>@{props.username}</h5>
      </div>
      <button
        className = 'btn btn-danger btn-block'
        onClick = {props.onReset.bind(null, props.id)}>
          Choose another Player
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

class PlayerInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function(){
      return {
        username: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }
  render(){
    return (
      <div className="col-md-4" >

        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="header" htmlFor='username'>
            {this.props.label}
          </label>
          <input
            id='username'
            placeholder='github username'
            type='text'
            autoComplete='off'
            className="form-control"
            value={this.state.username}
            onChange = {this.handleChange}
          />
          </div>
          <button
            className = "btn btn-info btn-block"
            type ='submit'
            disabled={!this.state.username}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    //this will make sure the keyword is refering to our component no matter where the submit is called
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
    handleSubmit(id, username){
      this.setState(function(){
        var newState = {};
        newState[id + 'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
        return newState;
      });
    }
    handleReset(id){
      this.setState(function(){
        var newState = {};
        newState[id + 'Name'] = '';
        newState[id + 'Image'] = null;
        return newState;
      })
    }
  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;


    //if playerOneName is empty string, then render the form
      return(
        <div>
          <div className='row'>
            {!playerOneName &&
              <PlayerInput
                id='playerOne'
                label='Player One'
                onSubmit={this.handleSubmit}
              />}

            {playerOneImage !== null &&
              <PlayerPreview
                  avatar={playerOneImage}
                  username={playerOneName}
                  onReset={this.handleReset}
                  id='playerOne'
              />}

            {!playerTwoName &&
              <PlayerInput
                id='playerTwo'
                label='Player Two'
                onSubmit={this.handleSubmit}
              />}

            {playerTwoImage !== null &&
              <PlayerPreview
                  avatar={playerTwoImage}
                  username={playerTwoName}
                  onReset={this.handleReset}
                  id='playerTwo'
              />}
          </div>

          {playerOneImage && playerTwoImage &&
            <div className="row aligner">
            <RLink
              className = "btn btn-primary btn-md battle"
              to = {{
                pathname: match.url + '/results',
                search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
              }}>
              Battle
            </RLink>
            </div>
          }
        </div>
      )
  }
}

module.exports = Battle;
