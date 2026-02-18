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
					A passionate <strong>Software Engineer</strong>{" "}
					specializing in building
					<strong> efficient</strong>, <strong>scalable</strong>, and{" "}
					<strong>impactful software solutions</strong>. My journey in tech is
					driven by a commitment to <strong>innovation</strong> and a love for
					solving
					<strong> complex problems</strong> with <strong>elegant code</strong>.
					Over the years, I&apos;ve worked across <strong>startups</strong> and{" "}
					<strong>established organizations</strong>. I&apos;ve consistently
					delivered projects that blend <strong>functionality</strong> with
					<strong> seamless user experiences</strong>.
				</p>

				<p>
					When I&apos;m not immersed in development, you&apos;ll find me
					<strong> strategizing</strong> over a game of <strong>chess</strong>,{" "}
					<strong>diving</strong> into a good <strong>book</strong>, or
					exploring new ideas in the <strong>gaming world</strong>. Let&apos;s
					connect and turn
					<strong> great ideas</strong> into <strong>reality</strong>!
				</p>
			</article>
			<SocialLinks />
		</>
	);
};

export default About;
