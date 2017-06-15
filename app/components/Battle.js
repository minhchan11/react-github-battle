var React = require('react');
var PropTypes = require('prop-types');

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
  }
    handleSubmit(id, username){
      this.setState(function(){
        var newState = {};
        newState[id + 'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
        return newState;
      });
    }
  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

      return(
        <div>
          <div className='row'>
            {!playerOneName &&
              <PlayerInput
                id='playerOne'
                label='Player One'
                onSubmit={this.handleSubmit}
              />}

            {!playerTwoName &&
              <PlayerInput
                id='playerTwo'
                label='Player Two'
                onSubmit={this.handleSubmit}
              />}
          </div>
        </div>
      )
  }
}

module.exports = Battle;
