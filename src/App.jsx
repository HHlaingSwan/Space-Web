import React, { useEffect, useState } from "react";
import BgVideo from "./assets/Bg-Earth.mp4";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";

const App = () => {
	const [isloading, setLading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLading(false);
		}, 5000);
		AOS.init({
			duration: 1200,
			easing: "ease-in-out",
		});
	}, []);

	return (
		<>
			{isloading ? (
				<Loader />
			) : (
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
			)}
		</>
	);
};

export default App;
