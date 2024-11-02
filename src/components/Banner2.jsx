import React from "react";
import SpaceShipTwo from "../assets/Space-Ship-2.jpg";

const Banner2 = () => {
	return (
		<>
			<div className='bg-black w-full h-auto text-white p-10 '>
				<div className='grid grid-cols-1 md:grid-cols-2 min-h-[200px] '>
					<div className='p-4 border-t-2 flex flex-col pt-9 gap-4 border-l-2 border-sky-950'>
						<span
							data-aos='fade-up'
							data-aos-delay='300'
							className='text-base text-sky-950 font-bold '>
							Our Mission
						</span>
						<h1
							data-aos='fade-up'
							data-aos-delay='500'
							className='uppercase text-3xl font-serif '>
							rapidscat
						</h1>
						<p
							data-aos='fade-up'
							data-aos-delay='700'
							className='text-base'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							ea rem, est nihil exercitationem laudantium magnam quidem itaque
							quia libero corrupti accusantium culpa? Earum excepturi porro,
							deserunt totam quo libero Lorem ipsum dolor,
						</p>
						<button
							data-aos='fade-up'
							data-aos-delay='900'
							className='bg-blue-600 text-white w-40 sm:text-2xl rounded-lg px-5 py-3 mt-4 font-bold'>
							View All
						</button>
					</div>
					<div className='w-full h-full p-12'>
						<img
							data-aos='zoom-in'
							className='w-full h-full object-cover'
							src={SpaceShipTwo}
							alt=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner2;
