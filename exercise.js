//Make Hello World
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render(){
    return(
      <div>
      Hello {this.props.name}!
      </div>
    )
  }
}

ReactDOM.render(
  <App name="Tyler"/>,
  document.getElementById('app')
);

//prop external
class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.prop.name} />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
  document.getElementById('app')
);

// prop also simple
var USER_DATA = {
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);

//prop advanced
class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img} />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  }} />,
  document.getElementById('app')
);
//map functions
class ShowList extends React.Component
{
  render(){
    return(
    <div>
       <ul>
         {this.props.names.map(function(friend){
           return <li>{friend}</li>;
         })}

        //  or filter
         {this.props.names.filter(function(friend){
           if(friend == 'Elise'){
             return <li>{friend}</li>;
           }
         })}
       </ul>
    </div>
    )
  }
}
       </ul>
    </div>
    )
  }
}

class FriendsContainer extends React.Component {
  render(){
    var name = "Minh";
    var friends = ["Kaz", "Jiwon", "Elise"];
    return (
    <div>
        <h2>Name: {name} </h2>
        <ShowList names = {friends} />
    </div>
    )
  }
}
ReactDOM.render(
 <FriendsContainer />,
  document.getElementById('app')
);

//filter and map exercise
class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
                {this.props.list.filter(function(person){
            return person.friend;
          }).map(function(friend, index){ //can pass in index to make key
            return <li key={friend.name}>{friend.name}</li> //key helps React to understand which element has changed
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(person){
            return !person.friend;
          }).map(function(friend, index){
            return <li key={friend.name}>{friend.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

//2nd way: make stateless functional Component
// var React = require('react');
// function FriendItem (props) {
//   return <li>{props.friend}</li>
// }
// function FriendsList (props) {
//   return (
//     <h1>Friends:</h1>
//     <ul>
//       {props.friends.map((friend, index) => <FriendItem friend={friend} key={friend} />)}
//     </ul>
//   )
// }
// module.exports = FriendsList

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);

//props
class ProfilePic extends React.Component {
   render() {
     return (
       <img src={'https://photo.fb.com/' + this.props.username} />
     )
   }
 })
 class ProfileLink extends React.Component {
   render() {
     return (
       <a href={'https://www.fb.com/' + this.props.username}>
         {this.props.username}
       </a>
     )
   }
 })
 class Avatar extends React.Component {
   render() {
     return (
       <div>
         <ProfilePic username={this.props.username} />
         <ProfileLink username={this.props.username} />
       </div>
     )
   }
 })
 <Avatar username="tylermcginnis" />

 // pure function
 var ProfilePic = function (props) {
  return <img src={'https://photo.fb.com/' + props.username} />
}
var ProfileLink = function (props) {
  return (
    <a href={'https://www.fb.com/' + props.username}>
      {props.username}
    </a>
  )
}
var Avatar = function (props) {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  )
}
<Avatar username="tylermcginnis" />

//Prop types
var React = require('react');
var PropTypes = require('prop-types')
class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function (friend) {
          return <li>{friend}</li>
        })}
      </ul>
    )
  }
}
Users.propTypes = {
    list: PropTypes.array.isRequired
    list: PropTypes.arrayOf(PropTypes.object)
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      friend: PropTypes.bool.isRequired,
    }))
  }

//Prop types with css
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
//type validation
Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}


ReactDOM.render(
  <Badge
    name="Tyler"
    username="something"
    img={{ 'image': 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}} />,
  document.getElementById('app')
);

//Set state using bind
// This is to set state right on the parent component
var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
return (
  <div>
  {/* <p>selected: {this.state.selectedLanguage}</p> this to show if change state worked */}
   <ul className="languages">
    {languages.map((language) => {
      return  (
        <li
        style ={language === this.state.selectedLanguage? {color: '#d0021b'} : null}
        onClick = {this.updateLanguage.bind(null, language)}   /* this.updateLanguage.bind(null. language) bind the function to the current language item*/
        key={language} >
        {language}
        </li>
      )
    })}
    /* calling it on the current context, you have to call 'this' as a parameter on the map function, otherwise it will not know what 'this' is[map(function(language){}, this)]. So fat arrow helps to eliminate the need for 'this'*/

   </ul>
  </div>
