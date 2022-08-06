import { useNavigate } from "react-router-dom";

const Interests = () => {
    // let user_interests= [];
	let navigate= useNavigate();
	let possible_interests = [
		'Medecine',
		'Entertainement',
		'Real-Estate',
		'Architecture',
		'Engineering',
		'Animation',
		'Movies',
		'Photography',
		'Culture',
		'Design',
		'Music',
		'Arts',
		'Business',
	];

    const interestClicked = (e) => e.target.classList.toggle('picked-interest');

    const confirmChoices = () => {
		navigate('/Map');
    }

    const abortChoices = () => {
		navigate('/');
    }

	return (
		<section className='absolute inset-0 flex flex-col justify-center items-center gap-20 px-1'>
			<h1 className='text-5xl text-[#023E8A] text-center'>
				your areas of interest
			</h1>
			<div className='flex flex-wrap justify-center gap-x-2 gap-y-2'>
				{possible_interests.map((interest) => {
					return (
						<button className='text-[#023E8A] rounded-xl bg-gray-200 py-1 px-2' onClick={interestClicked}>
							{interest}
						</button>
					);
				})}
			</div>
			<div className='absolute bottom-0 inset-x-0 flex justify-center gap-4 text-[#023E8A] text-xl'>
				<button className='py-4 px-10 my-4 bg-gray-200 rounded-xl font-bold' onClick={abortChoices}>
					SKIP
				</button>
				<button className='py-4 px-10 my-4 bg-[#FFCB00] rounded-xl font-bold' onClick={confirmChoices}>
					NEXT
				</button>
			</div>
		</section>
	);
};

export default Interests;
