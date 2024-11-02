import React from "react";

const Data = [
	{
		id: 1,
		title: "ATOM",
		content: "300-1500km",
		des: "adjective. of, pertaining to, resulting from, or using atoms, atomic energy, or atomic bombs: an atomic explosion. propelled or driven by atomic energy: an atomic submarine.",
		icon: "fa-brands fa-react text-6xl sm:text-[100px]  text-white/95",
		aosDelay: "200",
	},
	{
		id: 2,
		title: "GPS",
		content: "500-2500km",
		des: "What is GPS? The Global Positioning System (GPS) is a U.S.-owned utility that provides users with positioning, navigation, and timing (PNT) services. ",
		icon: "fa-solid fa-location-dot sm:text-[100px]   text-6xl text-white/95",
		aosDelay: "500",
	},
	{
		id: 3,
		title: "ISS",
		content: "800-3000km",
		des: "The International Space Station is a large space station that was assembled and is maintained in low Earth orbit by a collaboration of five space agencies ",
		icon: "fa-solid fa-satellite sm:text-[100px]   text-6xl text-blue-white/95",
		aosDelay: "800",
	},
];
const About = () => {
	return (
		<>
			<div className='bg-black  text-white z-30  relative py-10  min-h-[400px]'>
				<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-24   gap-6'>
					{Data.map((item) => (
						<div
							data-aos='fade-up'
							data-aos-delay={item.aosDelay}
							key={item.id}
							className='flex flex-col gap-4   p-5 justify-center items-center text-center  bg-sky-900/60 rounded-lg capitalize   min-h-[180px]'>
							<i className={item.icon}></i>
							<h1 className='text-3xl md:text-4xl font-mono text-white/90'>
								{item.title}
							</h1>
							<p className='text-lg md:text-xl text-white/80'>{item.content}</p>
							<p className='text-bzse text-white/50 '>{item.des}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default About;
