import React, { FC } from 'react';

import { DarkMode } from '../../shared/ui/dark-mode';

import LogoB from '../../assets/logoB.svg';
import LogoW from '../../assets/logoW.svg';
import './Header.css';

interface IHeader {
	theme: 'dark' | 'light';
	changeTheme: () => void;
}

export const Header: FC<IHeader> = ({theme, changeTheme}) => {

	return (
		<div className='header-container'>
			<div className='header-logo'>
				{theme === 'dark' ?
					<img src={LogoW} alt='logo' /> :
					<img src={LogoB} alt='logo' />
				}
			</div>
			<DarkMode theme={theme} changeTheme={changeTheme} />
		</div>
	);
}
