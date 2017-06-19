var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Loading = require('./Loading');


//this is a function because all it does is rendering UI
// passing in props to prevent the use of 'this', thus specifying that the component function only works here
function LanguageSelection(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return(
      <ul className="languages">
       {languages.map((language) => {
         return  (
           <li
           style ={language === props.selectedLanguage? {color: '#d0021b'} : null}
           onClick = {props.onSelect.bind(null, language)}
           key={language} >
           {language}
           </li>
         )
       })}
      </ul>
    )
}

LanguageSelection.propTypes = {
    selectedLanguage : PropTypes.string.isRequired,
    onSelect : PropTypes.func.isRequired
}

function RepoGrid(props){
  return(
    <ul className="popular-list">
    {props.repos.map((repo, index) => {
      return (
        <li key={repo.name} className = 'popular-item'>
          <div className='popular-rank'>
            #{index + 1}
          </div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}/>
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      )
    })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,

}



class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    //established the initial state of this component
    this.updateLanguage = this.updateLanguage.bind(this);
    //bind the update language to whatever its called
  }
  //component did mount is when it's rendered to the view
  componentDidMount(){
      this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang,
        repos: null
      } //set state for React to track changes
    });
    api.fetchPopularRepos(lang)
       .then(function(repos){
         this.setState(function(){
           return {
             repos: repos
           }
         })
       }.bind(this));
  }
  render() {
    return (
      <div>
        <LanguageSelection
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updateLanguage}
        />
        {!this.state.repos
          ? <Loading text='DOWNLOADING' speed={400}/>
          : <RepoGrid repos = {this.state.repos}/>
        }
      </div>
    )
  }
}

module.exports = Popular;
