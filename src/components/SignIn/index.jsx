import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	let navigate = useNavigate();
	return (
		<section className='h-screen relative flex flex-col justify-center items-center'>
			<img
				className='absolute top-0 left-0'
				src='signin-background-1.svg'
				alt='background'
			/>
			<em className='text-2xl text-white font-bold py-8 w-full text-center bg-gradient-to-b from-[#FFCB00] to-[#FF9D0B] mb-8'>
				Ready To Hunt again?
			</em>
			<form
				className='flex flex-col justify-center items-start text-xl text-[#003A70]'
				action=''
			>
				<label className='font-bold' htmlFor='signin-email'>
					Email:
				</label>
				<input
					className='h-12 bg-[#EDEFF2] mb-2 rounded-2xl px-5'
					type='email'
					name='email'
					id='signin-email'
				/>
				<label className='font-bold' htmlFor='signin-password'>
					Pasword:
				</label>
				<input
					className='h-12 bg-[#EDEFF2] mb-2 rounded-2xl px-5'
					type='password'
					name='password'
					id='signin-password'
				/>
				<input
					className='py-4 px-14 my-4 bg-[#FFCB00] rounded-xl self-center font-bold'
					type='submit'
					value='SIGN IN'
					onClick={() => navigate('/interests')}
				/>
			</form>
			<p className='text-xs text-[#3D7DCA] font-medium'>
				DON'T HAVE AN ACCOUNT?{' '}
				<Link to='/Register' className='font-bold'>
					Register
				</Link>
			</p>
			<img
				className='absolute bottom-0 right-0'
				src='signin-background-2.svg'
				alt='background'
			/>
		</section>
	);
};

export default SignIn;
