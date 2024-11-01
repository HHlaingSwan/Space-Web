import React from "react";

const NavBar = () => {
	const navItems = ["Home", "Tech", "Crew", "Satellites"];
	return (
		<>
			<div className=' flex items-center fixed bg-black/10 backdrop-blur-sm justify-between w-full h-16 px-4 sm:px-10 z-50'>
				<div className='flex items-center  hover:cursor-pointer'>
					<i className='fa-brands fa-squarespace hover:text-gray-400 text-white text-lg   sm:text-4xl '></i>
					<span className='text-white sm:text-xl text-sm  font-bold tracking-wide text-center ps-2'>
						CJ SPACE
					</span>
				</div>
				<div className='flex justify-center items-center md:gap-5 gap-3'>
					{navItems.map((item, index) => {
						return (
							<div
								className='text-white sm:text-xl text-xs font-bold hover:text-gray-400 hover:cursor-pointer'
								key={index}>
								{item}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default NavBar;
