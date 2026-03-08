import { ReactNode } from "react";
import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import BackgroundUI from "../components/BackgroundUI";
import ThemeProvider from "../components/ThemeProvider";
import DarkModeToggle from "../components/DarkModeToggle";
import { Metadata } from "next";

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	variable: "--playfairDisplay",
});
const sourceSans3 = Source_Sans_3({
	subsets: ["latin"],
	variable: "--sourceSans3",
});

export const metadata: Metadata = {
	title: "Wai Yan Min Lwin",
	description:
		"I am Wai Yan Min Lwin. I deliver accessible and maintainable products through code.",
	keywords: [
		"Wai Yan Min Lwin",
		"Wai Yan",
		"Wai Yan Min Lwin's personal website",
		"Wai Yan Min Lwin's portfolio",
		"Software Engineer",
		"SWE",
		"Web Developer",
	],
	openGraph: {
		title: "Wai Yan Min Lwin - Software Engineer",
		description:
			"I am Wai Yan Min Lwin. I deliver accessible and maintainable products through code.",
		images: {
			url: "/me.jpg",
			width: 300,
			height: 300,
		},
		siteName: "Wai Yan Min Lwin",
	},
	twitter: {
		title: "Wai Yan Min Lwin - Software Engineer",
		description:
			"I am Wai Yan Min Lwin. I deliver accessible and maintainable products through code.",
		images: {
			url: "/me.jpg",
			width: 300,
			height: 300,
		},
		card: "summary",
	},
	verification: {
		google: "R7Cgx_vuZMmn-j7KBSRO8LKGGg49PDVG3JlXzzfm1TI",
	},
	robots: { index: true, follow: true },
	category: "Software Engineer",
	alternates: {
		canonical: "https://www.waiyanminlwin.com/",
	},
	manifest: "/manifest.json",
	publisher: "Wai Yan Min Lwin",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${playfairDisplay.variable} ${sourceSans3.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t==null&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
					}}
				/>
			</head>
			<body>
				<ThemeProvider>
					<div className="sm:hidden absolute top-4 right-4 z-30 bg-white dark:bg-stone-800 rounded-full border-[1px] border-mute/20 dark:border-stone-600/30 shadow-sm shadow-mute/20 dark:shadow-stone-900/30 p-1.5">
						<DarkModeToggle />
					</div>
					<main className="relative z-10 container mx-auto px-7 sm:px-20 md:px-40 lg:px-60 xl:px-80 py-10 sm:py-16 md:py-28">
						{children}
					</main>
					<BackgroundUI />
				</ThemeProvider>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							sameAs: [
								"https://github.com/wyMinLwin",
								"https://www.linkedin.com/in/wyMinLwin",
								"https://instagram.com/clean_freak_scout",
							],
						}),
					}}
				/>
			</body>
		</html>
	);
}
