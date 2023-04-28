import React, { FC } from 'react';

import './Content.css';

interface IContent {
	theme: 'dark' | 'light'
}

export const Content: FC<IContent> = ({theme}) => {

	return (
		<div className='content-container'>
			{theme === 'dark' ?
				<iframe
					src="https://datalens.yandex/0fuguyxaph9cq?_theme=dark"
					width="600"
					height="400"
					frameBorder="0"></iframe> :
				<iframe
					src="https://datalens.yandex/0fuguyxaph9cq?"
					width="600"
					height="400"
					frameBorder="0"></iframe>
			}
		</div>
	);
}
