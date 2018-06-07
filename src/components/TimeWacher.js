import React, { Component } from 'react';
import moment from 'moment-timezone'

//image
import trump from '../resources/imgs/trump.jpg';
import kim from '../resources/imgs/Kim.jpg';


class TimeWatcher extends Component {

  constructor(props) {
    super(props)

    this.time = moment();


    
    this.zoneMy = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.zoneAmerica = "America/New_York";
    this.zoneNorthKorea = "Asia/Pyongyang"
    this.state = {
      time : this.time.format("hh:mm A"),
      zone: this.zoneMy
    }
  }
  

  onClickHandlerImageSelect(zone){
    
      this.setState({
        zone,
        time : this.time.tz(zone).format("hh:mm A")
      })
  }

  onHandleClickCancel(){
    this.setState({
      zone : this.zoneMy,
      time : this.time.tz(this.zoneMy).format("hh:mm A")
    })
  }

  render() {

    var states = this.state;
    return (
           <div>
              <div className="rulers" >
                  { states.zone !== this.zoneMy  && <span className="cancel" onClick={this.onHandleClickCancel.bind(this)}>&times;</span> }
                  { states.zone !== this.zoneNorthKorea && <img className={states.zone === this.zoneAmerica ? "selectedImg" : ""} src={trump} alt="trump" onClick={this.onClickHandlerImageSelect.bind(this,this.zoneAmerica)} /> }
                  { states.zone !== this.zoneAmerica && <img  className={states.zone === this.zoneNorthKorea ? "selectedImg" : ""} src={kim} alt="kim" onClick={this.onClickHandlerImageSelect.bind(this,this.zoneNorthKorea)} /> }
              </div>
              <h2 className="zone-display">{states.zone} time is</h2>
              <strong className="time-display">{states.time}</strong>
              <div className="clear"></div>
           </div>    
    );
  }
}

export default TimeWatcher;
