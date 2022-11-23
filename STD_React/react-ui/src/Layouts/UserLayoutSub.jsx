import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

const UserLayoutSub = () => {
	return (
		<div className='wrapper sub'>
			<UserHeader />
			<Outlet />
			<UserFooter />
		</div>
	);
}

export default UserLayoutSub;
