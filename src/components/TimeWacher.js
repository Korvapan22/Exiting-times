import React, { Component } from 'react';
import moment from 'moment'


//image
import trump from '../resources/imgs/trump.jpg';
import kim from '../resources/imgs/Kim.jpg';


class TimeWatcher extends Component {

  constructor(props) {
    super(props)

   
    this.zoneMy = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.zoneAmerica = "America/New_York";
    this.zoneNorthKorea = "Asia/Pyongyang"
    this.state = {
      time : '',
      zone: this.zoneMy
    }
  }

  componentDidMount(){
    var {zone} = this.state;
    this.getTime(zone);
  }

  //get time using API
  getTime(zone){

    var {API} = this.props;
    
    fetch( API + zone)
    .then(response => response.json())
    .then(data => this.setState({ zone,time: moment(data.formatted).format("hh:mm A") }));
  }
  

  onClickHandlerImageSelect(p_zone){

      var {zone} = this.state;
      if(zone === p_zone)
        return;

      this.getTime(p_zone);
  }

  onHandleClickCancel(){
    // this.setState({
    //   zone : this.zoneMy,
    //   time : this.time.tz(this.zoneMy).format("hh:mm A")
    // })

    this.getTime(this.zoneMy);
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
