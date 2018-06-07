import React, { Component } from 'react';

//custom components
import Header from './Header';
import TimeWatcher from './TimeWacher';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      status:0
    }
  }


  onNavigate(status){
    this.setState({
      status
    });
  }
  

  render() {

    var states = this.state;
    return (
      <div className="App">
        
        {/*Logo header*/}
        <Header/>

        

        <div className="content-panel" >
           
           
          {states.status === 0 && <Home onNavigate={this.onNavigate.bind(this)}/> }

          {states.status !== 0 && 
            <div>
              <button className="btn-back btn btn-primary btn-xs" onClick={this.onNavigate.bind(this,0)}>back</button>
              <TimeWatcher/>
            </div>
          }
          
        </div>
      </div>
    );
  }
}

export default App;
