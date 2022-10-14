import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
      <form action="http://localhost:8000/admin/save" method="POST">
        <select name="option" value={this.state.value} onChange={this.handleChange}>
          <option selected value='word' >word</option>
          <option value='p&n' >punctuation and number</option>
          <option value='punc'>punctuation</option>
        </select>
        <textarea name='text' />
  
        <input type="submit" value="Submit" />
      </form>
    );
  }
 
}

export default App;
