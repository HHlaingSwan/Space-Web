import React from "react";

const Footer = () => {
	return (
		<>
			<div className='bg-sky-950 w-full gap-3 h-auto grid grid-cols-1 sm:grid-cols-2   px-10  py-6 '>
				<div className=' w-full h-auto  '>
					<h1 className='text-2xl uppercase font-bold  py-2  text-white '>
						Let's get in touch
					</h1>
					<p className='text-white/80  py-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta
						magni ad perspiciatis enim modi velit numquam magnam explicabo in.
					</p>
					<button className='bg-blue-800 capitalize  text-white w-60 sm:text-lg rounded-lg px-5 py-3 mt-4 font-bold'>
						tell about your project
					</button>
				</div>
				{/* <div className=' w-full h-auto'>
					<div>
						<h1>
							Email<span className='text-white/80'>SgJYR@example.com</span>
						</h1>
						<h1>
							Phone<span className='text-white/80'>+91 1234567890</span>
						</h1>
						<h1>
							Address<span className='text-white/80'>Delhi, India</span>
						</h1>
					</div>
					<div></div>
				</div> */}
			</div>
		</>
	);
};

export default Footer;
