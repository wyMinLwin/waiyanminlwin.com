"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import StarIcon from "@/assets/icons/star.svg";

const GithubStar = ({ repo }: { repo: string }) => {
	const [stars, setStars] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function fetchStarCount() {
		try {
			setIsLoading(true);
			const response = await fetch(
				"https://api.github.com/repos/wyMinLwin/" + repo
			);
			const data = await response.json();
			setStars(data.stargazers_count);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

    function goToGithub() {
        window.open(`https://github.com/wyMinLwin/${repo}`, "_blank");
    }

	useEffect(() => {
		fetchStarCount();
	}, []);

	return (
		<button
            onClick={() => goToGithub()}
			className="px-2 mt-1 flex justify-center items-center space-x-1 hover:text-primary"
		>
			{isLoading ? "-" : <span className="text-lg">{stars}</span>}
			<Image priority src={StarIcon} alt="star image" width={20} height={20} />
		</button>
	);
};

export default GithubStar;
