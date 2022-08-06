import { Link } from 'react-router-dom';

const NavMenu = () => {
	let avatarSrc = 'account-avatar.png';
	let userName = 'Hadjer Bouchenine';
	let userScore = 20;

	const hideNavmenu = () => {
		document.getElementById('navmenu').classList.remove('show-navmenu');
		const eventsMap = document.getElementById('events-map');
		eventsMap && eventsMap.classList.remove('hidden');
	}

	return (
		<section
			id='navmenu'
			className='left-[100vw] opacity-0 absolute hidden flex-col justify-start items-center inset-0 bg-[#023E8A] py-20 gap-12'
		>
			<button onClick={hideNavmenu} className='absolute top-[2%] left-[5%]'>
				<img
					className='relative left-[-30%] w-12'
					src='arrow_back.svg'
					alt='arrow back'
				/>
			</button>
			<div className='flex flex-col items-center gap-5'>
				<img className='w-3/5' src={avatarSrc} alt='Avatar' />
				<h1 className='text-lg text-white font-bold'>{userName}</h1>
				<h1 className='text-xl text-white font-bold'>Your score: {userScore}</h1>
			</div>
			<nav className='flex flex-col gap-4 w-1/2'>
				<Link to='/' className='flex gap-2 items-center'>
					<img src='home-icon.svg' alt='home' />
					<h2 className='text-white font-medium text-lg align-middle'>Home</h2>
				</Link>
				<Link to='' className='flex gap-2 items-center'>
					<img src='interests-icon.svg' alt='interests' />
					<h2 className='text-white font-medium text-lg align-middle'>Interests</h2>
				</Link>
				<Link to='' className='flex gap-2 items-center'>
					<img src='maps-icon.svg' alt='maps' />
					<h2 className='text-white font-medium text-lg align-middle'>Maps</h2>
				</Link>
				<Link to='' className='flex gap-2 items-center'>
					<img src='profile-icon.svg' alt='profile' />
					<h2 className='text-white font-medium text-lg align-middle'>My Profile</h2>
				</Link>
				<Link to='' className='flex gap-2 items-center'>
					<img src='settings-icon.svg' alt='settings' />
					<h2 className='text-white font-medium text-lg align-middle'>Settings</h2>
				</Link>
			</nav>
			<img className='absolute bottom-0 w-2/6 mb-8' src='logo.png' alt='logo' />
		</section>
	);
};

export default NavMenu;
