import { useEffect, useState } from 'react';
import { TTheme } from '../types/type-theme';

export const useTheme = (): [("light" | "dark"), (() => void)] => {

	const [theme, setTheme] = useState<TTheme>(
		JSON.parse(String(localStorage.getItem('theme'))) || 'light'
	);

	const handleChangeTheme = () => {
		if (theme === 'light')
			setTheme('dark');
		else
			setTheme('light');
	}

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme])

	return [theme, handleChangeTheme];
}
