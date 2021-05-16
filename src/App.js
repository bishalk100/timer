import './App.css';
import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super();
    this.state = {
      
      input: '',
     
      updatedDate: 'Select a date & time'
    }
  }

  getData = e => {
    this.setState({ input: e.target.value })
    //console.log(e.target.value)
  }
  updateDate = () => {
    if (this.state.updatedDate === null || this.state.input === '') {
      
      alert("enter valid date")
    }
    else {
      
      let diff = new Date(this.state.input) - new Date();
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      let x = setInterval(() => {
        
        let diff = new Date(this.state.input) - new Date();
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        this.setState({ updatedDate: `Ending in ${days} days : ${hours} hours :${minutes} min : ${seconds} sec` });
        if (diff < 0) {
          clearInterval(x);
          this.setState({ updatedDate: "Date has been expired" })
        }
        
      }, 1000);
    
      
    }
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <div className="Timer">
            <h2 className="card__heading">Welcome to Countdown timer</h2>
            
            <h1 className="card__heading">{this.state.updatedDate}</h1>
          </div>
          <div className="input">
            <input value={this.state.input} className='inputbox' onChange={this.getData}  type="datetime-local" /><br />
            <button onClick={this.updateDate} className='button'>Submit</button>
            
              
            
          </div>
          <p className="copyright">© Bishal Kumar Sahoo</p>
         
          
        </div>
        
      </div>
    )
  }
}

export default App;