import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  	super();
  	this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
  	window.initMap = this.initMap;
  	createMapLink('https://maps.googleapis.com/maps/api/js?key=AIzaSyAD4vpwyw4zFgzo_4_RG4lAaVwCIVZM9Jc&callback=initMap');
  }

  initMap() {
	let map;
	map = new window.google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: {lat: 51.509865, lng: -0.118092}
	});  	
  }

  render() {
    return (
	    <div>	
	    	<header>
	    		<h1>Neightboor Map</h1>
	    	</header>
		    <div id="map-container">
		      	<div id="map" role="application">
		      	</div>
		    </div>
	    </div>
    );
  }
}

function createMapLink(url) {
	let tag = window.document.getElementsByTagName('script')[0];
	let script = window.document.createElement('script');

	script.src = url;
	script.async = true;
	script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
	tag.parentNode.insertBefore(script, tag);
}

export default App;
