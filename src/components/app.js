import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons.js';
import GiftsAndParties from './gifts_parties.js';
import Contact from './contact.js'

function App() {
	return (
		<div className = 'container'>
			<Nav/>
			<Route exact path ='/' component = {Welcome}/>
			<Route path ='/ourmacarons' component = {OurMacarons}/>
			<Route path ='/gifts_parties' component = {GiftsAndParties}/>
			<Route path ='/contact' component = {Contact}/>
		</div>
	)
}

export default App;