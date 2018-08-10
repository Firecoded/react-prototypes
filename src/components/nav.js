import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default (props) => {
	return (
		<ul className = "nav nav-tabs mt-3">
			<li className = "nav-item">
				<NavLink exact to = '/' className='nav-link' activeClassName = "active selected">Welcome</NavLink>
				<NavLink to = '/ourmacarons' className='nav-link' activeClassName = "active selected">Our Macarons</NavLink>
				<NavLink to = '/gifts_parties' className='nav-link' activeClassName = "active selected">Gifts and Parties</NavLink>
				<NavLink to = '/contact' className='nav-link' activeClassName = "active selected">Contact</NavLink>
			</li>
		</ul>
	)
}
