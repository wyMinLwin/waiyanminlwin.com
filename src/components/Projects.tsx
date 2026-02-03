import React from "react";
import GithubStar from "./GithubStar";
import Image from "next/image";
import ExternalLinkIcon from "@/assets/icons/external-link.svg";

const projects = [
	{
		name: "Scaffa",
		description:
			"Scaffa is a collection of pre-setup frontend templates for various frontend frameworks. It is designed to provide a quick start for frontend developers to start their projects without worrying about the setup process. This is neither a UI library nor a component library. It is a collection of pre-setup templates.",
		tag: ["NPX", "SvelteKit", "TailwindCSS", "TypeScript"],
		url: "https://scaffa.vercel.app/",
		github: "scaffa",
	},
    {
        name: "to-xlsx",
        description: "Export to excel with a function",
        tag: ["TypeScript" , "Excel"],
        url: "https://github.com/wyMinLwin/to-xlsx",
        github: "to-xlsx"
    },
    {
        name: "runtime-save",
        description: "A JavaScript library to save files with runtime-awareness.",
        tag: ["TypeScript", "NodeJS"],
        url: "https://github.com/wyMinLwin/runtime-save",
        github: "runtime-save",
    },
	{
		name: "Carbon Kinn Sin",
		description:
			"Carbon Kinn Sin is a gamified city-wide sticker collection initiative built with React, featuring a seamless user interface where users collect stickers and earn rewards for completing collections, ensuring an engaging and interactive experience.",
		tag: ["React", "ShadcnUI", "TailwindCSS", "TypeScript"],
		url: "https://carbon-kinn-sin.codemal.com/",
		github: "carbon-kinn-sin",
	},
	{
		name: "Mate Phwae Yin Hlu",
		description:
			"Mate Phwae Yin Hlu is a collaborative project with MCY, developed using Next.js, to create a fundraising platform for the 2024 Myanmar deadly flood. The platform successfully raised awareness and funds to support flood relief efforts.",
		tag: ["NextJS", "ShadcnUI", "TailwindCSS", "TypeScript"],
		url: "https://mate-phwae-yin-hlu.vercel.app/",
		github: "mate-phwae-yin-hlu",
	},
];

const Projects = () => {
	return (
		<div className="space-y-4">
			<h2 className="font-display text-xl tracking-wide font-semibold sm:text-2xl md:text-3xl">
				Projects
			</h2>
			<div className="space-y-6">
				{projects.map((project, index) => (
					<article
						key={index}
						className="group space-y-1 p-4 border-[1px] transition-all duration-200 border-mute/20 rounded-lg shadow-sm shadow-mute/10 bg-white hover:bg-[#fafaf9]"
					>
						<a href={project.url} target="_blank" rel="noreferrer">
							<h3 className="text-lg sm:text-xl font-semibold space-x-1 tracking-wide flex items-center ">
								<span>{project.name}</span>
								<Image
									priority
									width={18}
									height={18}
									src="/external-link.svg"
									alt="external-link"
                                    className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-[20px] h-[20px]" 
								/>
							</h3>
							<p className="text-base sm:text-lg">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.tag.map((tag, index) => (
									<span key={index} className="c-btn">
										{tag}
									</span>
								))}
							</div>
							<div className="flex flex-wrap space-x-2">
								<GithubStar repo={project.github} />
							</div>
						</a>
					</article>
				))}
			</div>
		</div>
	);
};

export default Projects;
