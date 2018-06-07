import React from 'react';
import PropTypes from 'prop-types'


const Home = (props) => {
   return <div className="home">
      <h2 >Exiting times take you to the places where madness is ruling</h2>
      <button className="btn btn-primary" onClick={props.onNavigate.bind(this,1)}>Let See !</button>
</div> 
} 

Home.prototype = {
  onNavigate : PropTypes.func.isRequired
}


export default Home;
