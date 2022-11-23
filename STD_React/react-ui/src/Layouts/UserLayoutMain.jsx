import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

const UserLayoutMain = () => {
	return (
		<div className='wrapper main'>
			<UserHeader />
			<Outlet />
			<UserFooter />
		</div>
	);
}

export default UserLayoutMain;
