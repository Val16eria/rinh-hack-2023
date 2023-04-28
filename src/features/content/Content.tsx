import React, { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import Car from '../../assets/bus.svg';
import './Content.css';

interface IBus {
	id: number;
	count: number;
	date: string;
}

export const Bus:IBus[] =[
	{
		id: 10,
		count: 10,
		date: '6:00 - 21:00'
	},
	{
		id: 167,
		count: 14,
		date: '6:00 - 21:00'
	},
	{
		id: 20,
		count: 12,
		date: '6:00 - 21:00'
	},
	{
		id: 149,
		count: 18,
		date: '6:00 - 21:00'
	},
	{
		id: 14,
		count: 9,
		date: '6:00 - 21:00'
	}
];

export const Content: FC = () => {

	const { id } = useParams();

	return (
		<div className='content-container'>
			<ul className='bus-items'>

				{Bus.map((item) => (
					<NavLink to={`bus/${item.id}`}>
						<li key={item.id} className='bus-item'>
							<div className='bus-item__header'>
								<div className='bus-item__header_title'>
									<img src={Car} alt='bus'/>
									<p>Автобус №{item.id}</p>
								</div>
								<p>{item.date}</p>
							</div>
							<p className='bus-item__footer'>{item.count} кругов за день</p>
						</li>
					</NavLink>
				))}
			</ul>
			<div>
				<iframe
					src={`https://datalens.yandex/l0f0xs1gng8eb?transport_id_maa5=${id}`}
					width="600"
					height="400"
					frameBorder="0"
				></iframe>
			</div>
		</div>
	);
}
