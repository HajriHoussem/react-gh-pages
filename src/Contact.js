import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Contact extends Component {
render() {
    
return (
<div>
<p>You can easily find us !</p>
<Map google={this.props.google} zoom={14}>
<Marker onClick={this.onMarkerClick} name={'Current Position'}></Marker>
<InfoWindow onClose={this.onInfoWindowClos}>
   
</InfoWindow>
</Map>
</div>

);
}
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyA2s_7hTRpTg_kGatBJ9s7OL6yxB0HQnf0"
})(Contact)