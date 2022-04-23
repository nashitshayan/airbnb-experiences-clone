import React from 'react';
import images from '../ImportImages';
export default function Navbar() {
	return (
		<nav>
			<img src={images['airbnb-logo.png']} alt='logo' className='nav--logo' />
		</nav>
	);
}
