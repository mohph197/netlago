const EventDetails = ({ event }) => {
	return (
		<section className='flex flex-col justify-center items-center gap-4 absolute inset-0 px-10'>
			<h1 className='text-4xl text-[#023E8A] text-center'>{event.name}</h1>
			<p className='text-sm'>{event.description}</p>
			<h2 className='text-2xl text-[#023E8A] text-center'>
				Date:
				<br />
				{event.time.start} ---&gt; {event.time.end}
			</h2>
		</section>
	);
};

export default EventDetails;
