import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	let navigate = useNavigate();
	return (
		<section className='relative h-screen flex flex-col justify-center items-center px-10 overflow-hidden'>
			<img
				className='absolute top-[-5%] right-[-8%] w-3/5'
				src='register-background-1.svg'
				alt='background'
			/>
			<form
				className='flex flex-col justify-center items-start text-xl text-[#003A70]'
				action=''
			>
				<label className='font-bold' htmlFor='register-name'>
					Name:
				</label>
				<input
					className='h-12 bg-[#EDEFF2] mb-2 rounded-2xl px-5'
					type='text'
					name='name'
					id='register-name'
				/>
				<label className='font-bold' htmlFor='register-email'>
					Email:
				</label>
				<input
					className='h-12 bg-[#EDEFF2] mb-2 rounded-2xl px-5'
					type='email'
					name='email'
					id='register-email'
				/>
				<label className='font-bold' htmlFor='register-password'>
					Pasword:
				</label>
				<input
					className='h-12 bg-[#EDEFF2] mb-2 rounded-2xl px-5'
					type='password'
					name='password'
					id='register-password'
				/>
				<input
					className='py-4 px-14 my-4 bg-[#FFCB00] rounded-xl self-center font-bold'
					type='submit'
					value='REGISTER'
					onClick={() => navigate('/interests')}
				/>
			</form>
			<p className='text-xs text-[#3D7DCA] font-medium'>
				ALREADY HAVE ACCOUNT?{' '}
				<Link to='/SignIn' className='font-bold'>
					Sign in
				</Link>
			</p>
			<img
				className='absolute bottom-[-6%] left-[-17%] w-3/5'
				src='register-background-2.svg'
				alt='background'
			/>
		</section>
	);
};

export default Register;
