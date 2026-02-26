import React from "react";
import SocialLinks from "./SocialLinks";

const About = () => {
	return (
		<>
			<div>
				<h1 className="text-xl sm:text-2xl md:text-3xl">
					<span className="font-display font-medium">Hi, I am&nbsp;</span>
					<span className="text-2xl tracking-wide font-semibold sm:text-3xl md:text-4xl">
						Wai Yan Min Lwin
					</span>
				</h1>
				<p className="text-3xl tracking-wide sm:text-5xl font-bold w-fit bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-400">
					Software Engineer
				</p>
			</div>
			<article className="text-base sm:text-lg tracking-wide space-y-2">
				<p>
					A passionate Software Engineer specializing in building efficient,
					scalable, and impactful software solutions. My journey in tech is
					driven by a commitment to innovation and a love for solving complex
					problems with elegant code. Over the years, I&apos;ve worked across
					startups and established organizations. I&apos;ve consistently
					delivered projects that blend functionality with seamless user
					experiences.
				</p>

				<p>
					When I&apos;m not immersed in development, you&apos;ll find me
					strategizing over a game of chess, diving into a good book, or
					exploring new ideas in the gaming world. Let&apos;s connect and turn
					great ideas into reality!
				</p>
			</article>
			<SocialLinks />
		</>
	);
};

export default About;
