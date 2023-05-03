import React, { FC } from 'react';

import { useTheme } from '../../shared/hooks/useTheme';

import { Header } from '../../features/header';
import { Content } from '../../features/content';

export const Map: FC = () => {

	const [theme, handleChangeTheme] = useTheme();

	return (
		<div >
			<Header theme={theme} changeTheme={handleChangeTheme} />
			<Content theme={theme} />
		</div>
	);
}
