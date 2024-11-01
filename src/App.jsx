import React from "react";
import BgVideo from "./assets/Bg-Earth.mp4";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<div className=' h-[700px] relative'>
				<video
					autoPlay
					loop
					muted
					className='w-full  h-[700px] right-0 top-0 fixed object-cover z-[-1]'>
					<source
						src={BgVideo}
						type='video/mp4'
					/>
				</video>
				<NavBar />
				<Hero />
				<About />
				<Banner />
				<Banner2 />
				<Footer />
			</div>
		</>
	);
};

export default App;
