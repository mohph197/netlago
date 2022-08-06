// import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const Map = () => {
	let navigate = useNavigate();
	let events = [
		{
			_id: { $oid: '62231bfc362b811538257b7c' },
			name: 'hackIT',
			description:
				'descriptionHack!T is the first hackathon organized in Algeria by students. It was organized in two 2 editions, the first in 2017 and the second in 2018. This concept was introduced by CSE in order to stimulate innovation within the student community and develop IT solutions to solve the various problems posed during a whole weekend.',
			topics: ['coding', 'design'],
			attendees: [
				'med123@gmail.com',
				'sedik@gmail.com',
				'mohamed4@gmail.com',
				'yousraamiri@gmail.com',
				'aminbelgaid@gmail.com',
				'mahdy56@gmail.com',
				'raouf890@gmail.com',
				'mohamedouail67@gmail.com',
				'anis990@gmail.com',
				'chiraz668@gmail.com',
				'fatima@gmail.com',
				'nada02@gmail.com',
			],
			location: { x: { $numberDouble: '36.75' }, y: { $numberDouble: '3.22' } },
			time: { start: '28/02/2022', end: '2/03/2022' },
			link: 'https://hackit2018.cse.club/',
		},
	];

	return (
		<section id='events-map' className='absolute inset-0 pt-20'>
			<MapContainer className='h-full' center={[36.704706, 3.172]} zoom={16}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{events
					? events.map((event) => {
							console.log(event);
							return (
								<Marker
									key={event._id.$oid}
									position={[
										event.location.x.$numberDouble,
										event.location.y.$numberDouble,
									]}
									eventHandlers={{
										click: () => navigate(`/Event/${event._id.$oid}`),
									}}
								>
									<Popup>{event.name}</Popup>
								</Marker>
							);
					  })
					: null}
			</MapContainer>
		</section>
	);
};

export default Map;
