const Navbar = () => {
	const showNavmenu = () => {
		document.getElementById('navmenu').classList.add('show-navmenu');
		const eventsMap = document.getElementById('events-map');
		eventsMap && eventsMap.classList.add('hidden');
	}

	return (
		<div className='fixed inset-x-0 top-0 px-5 py-2 flex justify-end h-[4.5rem]'>
			<button className="flex flex-col gap-1 justify-center" onClick={showNavmenu}>
				<div className='h-0.5 w-8 rounded-full bg-[#023E8A] my-0.5'></div>
				<div className='h-0.5 w-8 rounded-full bg-[#023E8A] my-0.5'></div>
				<div className='h-0.5 w-8 rounded-full bg-[#023E8A] my-0.5'></div>
			</button>
		</div>
	);
};

export default Navbar;
