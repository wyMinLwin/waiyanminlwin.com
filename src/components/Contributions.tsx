import React from "react";
import GithubStar from "./GithubStar";
import Image from "next/image";
import ExternalLinkIcon from "@/assets/icons/external-link.svg";

const contributions = [
	{
		owner: "sveltejs",
		repo: "svelte.dev",
		description: "The Svelte omnisite",
		tags: ["Svelte", "TypeScript"],
		prs: [
			{ number: 1406, title: "fix: copy the correct code block" },
			{ number: 1647, title: "fix: correct copy for specific code block" },
			{ number: 1651, title: "fix: size adjustment for GitHub and npm icons" },
		],
	},
	{
		owner: "TheOrcDev",
		repo: "8bitcn-ui",
		description: "A retro-designed, accessible component library",
		tags: ["React", "TypeScript", "TailwindCSS"],
		prs: [
			{ number: 422, title: "feat: add Empty component" },
			{ number: 431, title: "feat: Item component" },
			{ number: 435, title: "fix: v0 misconfiguration due to registry" },
		],
	},
];

const Contributions = () => {
	return (
		<div className="space-y-4">
			<h2 className="font-display text-xl tracking-wide font-semibold sm:text-2xl md:text-3xl">
				Contributions
			</h2>
			<div className="space-y-6">
				{contributions.map((contribution, index) => (
					<article
						key={index}
						className="group space-y-1 p-4 border-[1px] transition-all duration-200 border-mute/20 rounded-lg shadow-sm shadow-mute/10 bg-white hover:bg-[#fafaf9]"
					>
						<a
							href={`https://github.com/${contribution.owner}/${contribution.repo}`}
							target="_blank"
							rel="noreferrer"
						>
							<h3 className="text-lg sm:text-xl font-semibold space-x-1 tracking-wide flex items-center">
								<span>
									{contribution.owner}/{contribution.repo}
								</span>
								<Image
									priority
									width={18}
									height={18}
									src={ExternalLinkIcon}
									alt="external-link"
									className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-[20px] h-[20px]"
								/>
							</h3>
							<p className="text-base sm:text-lg">
								{contribution.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{contribution.tags.map((tag, index) => (
									<span key={index} className="c-btn">
										{tag}
									</span>
								))}
								<span className="c-btn">
									{contribution.prs.length} merged PRs
								</span>
							</div>
							<ul className="mt-2 space-y-1 text-sm sm:text-base list-disc list-inside">
								{contribution.prs.map((pr) => (
									<li key={pr.number}>
										<span
											className="hover:text-primary transition-colors"
											onClick={(e) => {
												e.preventDefault();
												window.open(
													`https://github.com/${contribution.owner}/${contribution.repo}/pull/${pr.number}`,
													"_blank"
												);
											}}
										>
											{pr.title}{" "}
											<span className="text-stone-500">
												#{pr.number}
											</span>
										</span>
									</li>
								))}
							</ul>
							<div className="flex flex-wrap space-x-2">
								<GithubStar
									owner={contribution.owner}
									repo={contribution.repo}
								/>
							</div>
						</a>
					</article>
				))}
			</div>
		</div>
	);
};

export default Contributions;
