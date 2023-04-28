import React, { FC } from 'react';

import Logo from '../../assets/logo.svg';
import Moon from '../../assets/moon.svg';
import './Header.css';

export const Header: FC = () => {
	return (
		<div className='header-container'>
			<div className='header-logo'>
				<img src={Logo} alt='logo' />
			</div>
			<div className='header-right'>
				<div className='header-right__city'>
					<p>Ростов-на-Дону</p>
				</div>
				<div className='header-right__theme'>
					<button>
						<img src={Moon} alt='theme' />
					</button>
				</div>
			</div>
		</div>
	);
}
