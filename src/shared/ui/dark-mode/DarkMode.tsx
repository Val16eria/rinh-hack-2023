import React, { FC } from 'react';

import Moon from '../../../assets/moon.svg';
import Sun from '../../../assets/sun.svg';

interface IDarkMode {
	theme: 'dark' | 'light';
	changeTheme: () => void;
}

export const DarkMode: FC<IDarkMode> = ({theme, changeTheme}) => {

	return (
		<button onClick={changeTheme}>
			{theme === 'dark' ?
				<img src={Sun} alt='theme' /> :
				<img src={Moon} alt='theme' />
			}
		</button>
	);
}
