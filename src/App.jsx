import React, { useEffect } from "react";
import BgVideo from "./assets/Bg-Earth.mp4";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: "ease-in-out",
		});
	});
	return (
		<>
			<div className=' h-[800px] relative'>
				<video
					autoPlay
					loop
					muted
					className='w-full  h-[800px] right-0 top-0 fixed object-cover z-[-1]'>
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
