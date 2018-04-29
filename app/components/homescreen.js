import React from 'react';

export default class Homescreen extends React.Component {
  render() {
    return (
      <div className="plan-trip-div home-btn-div row">
        <div className="col-md-8 col-xs-8 col-sm-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
          <button className="btn"><h2><strong>Plan Trip</strong></h2></button>
        </div>
      </div>
      <div className="home-btn-div row">
        <div className="col-md-8 col-xs-8 col-sm-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
          <button className="btn"><h2><strong>Reviews</strong></h2></button>
        </div>
      </div>
      <div className="home-btn-div row">
        <div className="col-md-8 col-xs-8 col-sm-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
          <button className="btn"><h2><strong>Profile</strong></h2></button>
        </div>
      </div>
    )
  }
}
