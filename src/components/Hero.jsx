const Hero = () => {
	return (
		<>
			<div className='bg-black/20 h-full relative z-20'>
				<div className='h-full flex px-4 items-center sm:px-10 '>
					<div
						data-aos='fade-up'
						className='sm:w-1/2  w-full'>
						<h1 className='text-white text-2xl sm:text-3xl font-bold uppercase mb-4'>
							Orbit The <br />
							Earth
						</h1>
						<p
							data-aos='fade-up'
							data-aos-delay='300'
							className='text-white/90 text-sm font-semibold sm:text-xl '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							voluptatum totam debitis laudantium necessitatibus aspernatur odit
							recusandae alias obcaecati animi.
						</p>
						<button
							data-aos='fade-up'
							data-aos-delay='300'
							className='bg-blue-600 text-white sm:text-2xl rounded-lg px-5 py-3 mt-4 font-bold'>
							Explore
						</button>
					</div>
				</div>
				<div className='absolute bottom-0 left-0 w-full h-[20px] sm:h-[50px] md:h-[60px]z-30 bg-gradient-to-b from-transparent from-10% to-black to-90%'></div>
			</div>
		</>
	);
};

export default Hero;
