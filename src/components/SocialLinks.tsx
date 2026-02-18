import Image, { StaticImageData } from "next/image";
import React from "react";
import ResumeIcon from "@/assets/icons/resume.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import MailIcon from "@/assets/icons/mail.svg";

const links: {
	icon: StaticImageData;
	url: string;
	label: string;
	isMail: boolean;
}[] = [
	{
		icon: ResumeIcon,
		url: "/waiyanminlwin.pdf",
		label: "Resume",
		isMail: false,
	},
	{
		icon: GithubIcon,
		url: "https://github.com/wyMinLwin",
		label: "GitHub",
		isMail: false,
	},
	{
		icon: LinkedinIcon,
		url: "https://www.linkedin.com/in/wyMinLwin",
		label: "LinkedIn",
		isMail: false,
	},
	{
		icon: MailIcon,
		url: "waiyanminlwin421@gmail.com",
		label: "Mail",
		isMail: true,
	},
];

const SocialLinks = () => {
	return (
		<ul className="flex justify-start items-center flex-wrap gap-3">
			{links.map((link) => (
				<li key={link.label}>
					<a
						href={link.isMail ? `mailto:${link.url}` : link.url}
						target="_blank"
						rel="noreferrer"
					>
						<button className="c-btn">
							<Image
								priority
								width={16}
								height={16}
								src={link.icon}
								alt={link.label + "-icon"}
							/>
							<span>{link.label}</span>
						</button>
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
