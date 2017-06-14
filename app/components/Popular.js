var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    //established the initial state of this component
    this.updateLanguage = this.updateLanguage.bind(this); //bind the update language to whatever its called
  }
  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang
      } //set state for React to track changes
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <div>
      {/* <p>selected: {this.state.selectedLanguage}</p> this to show if change state worked */}
       <ul className="languages">
        {languages.map((language) => {
          return  (
            <li
            style ={language === this.state.selectedLanguage? {color: '#d0021b'} : null}
            onClick = {this.updateLanguage.bind(null, language)}
            key={language} >
            {language}
            </li>
          )
        })}
        {/* this.updateLanguage.bind(null. language) bind the function to the current language item*/}
        {/* calling it on the current context, you have to call 'this' as a parameter on the map function, otherwise it will not know what 'this' is. So fat arrow helps to eliminate the need for 'this'*/}
       </ul>
      </div>
    )
  }
}

module.exports = Popular;
