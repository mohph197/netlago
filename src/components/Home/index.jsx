import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className='relative flex flex-col justify-evenly items-stretch h-screen px-16 bg-gradient-to-b from-[#023E8A] to-[#002D67]'>
			<img
				className='absolute bottom-0 inset-x-0'
				src='home-background.svg'
				alt='background'
			/>
			<img src='logo.svg' alt='logo' />
			{/* <h1 className='text-4xl text-center text-white leading-relaxed font-bold'>
				let's take your social life for a ride
			</h1> */}
			<div className='z-10 flex flex-col gap-6'>
				<Link
					to='/SignIn'
					className='text-center font-bold py-4 text-2xl text-[#003A70] bg-[#FFCB00] rounded-xl shadow-[0px_5px_4px_#00000040]'
				>
					SIGN IN
				</Link>
				<Link
					to='/Register'
					className='text-center font-bold py-4 text-2xl text-[#003A70] bg-[#FFCB00] rounded-xl shadow-[0px_5px_4px_#00000040]'
				>
					REGISTER
				</Link>
			</div>
		</section>
	);
};

export default Home;
