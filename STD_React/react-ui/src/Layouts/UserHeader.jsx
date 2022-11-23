import React from 'react';
import { NavLink } from 'react-router-dom';

const UserHeader = () => {
	return (
		<header className='header'>
			<NavLink to='/Main/'>Main</NavLink>&nbsp;/&nbsp;
			<NavLink to='/Pages/Prototype'>Prototype</NavLink>
		</header>
	)
}
export default UserHeader;