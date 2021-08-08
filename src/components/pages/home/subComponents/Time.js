import React from 'react';
import './Time.css';


function Time() {

   const d = new Date()
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

  return (
  	<>
    <div className="main">
          <div className="date">        
             <h1>{day}</h1>
             <h2 id="date">{date}</h2>
             <h2 id="month">{month}</h2>
             <h2 id="year">{year}</h2>
          </div>
     </div>
  </>
  );
}

export default Time;