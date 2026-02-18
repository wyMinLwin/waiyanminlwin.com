"use client";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Contributions from "@/components/Contributions";
import Projects from "@/components/Projects";
import WorkExperiences from "@/components/WorkExperiences";
import {} from "next/navigation";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

export default function Home() {
    const [threshold, setThreshold] = useState(0.5);
    const [currentPath, setCurrentPath] = useState("about");

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 640) {
                // Mobile view
                setThreshold(0.3);
            } else if (window.innerWidth < 1024) {
                // Tablet view
                setThreshold(0.5);
            } else if (window.innerWidth < 1280) {
                // Laptop view
                setThreshold(0.58);
            } else {
                // Desktop view
                setThreshold(0.62);
            }
        };

        // Set the initial threshold
        updateThreshold();

        // Update the threshold on window resize
        window.addEventListener("resize", updateThreshold);
        if (window.location.hash) {
            setCurrentPath(window.location.hash.slice(1));
        } else {
            setCurrentPath("about");
        }

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateThreshold);
        };
    }, []);
    return (
        <>
            <Navbar currentPath={currentPath} />
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {/* <section
				id="about"
				ref={about.ref}
				className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"

			>
				<About />
			</section> */}
                <InView
                    threshold={threshold}
                    as={"section"}
                    id="about"
                    className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                    onChange={(inView) => {
                        if (inView) {
                            setCurrentPath("about");
                        }
                    }}
                >
                    <About />
                </InView>

                <InView
                    threshold={threshold}
                    as={"section"}
                    id="experiences"
                    className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                    onChange={(inView) => {
                        if (inView) {
                            setCurrentPath("experiences");
                        }
                    }}
                >
                    <WorkExperiences />
                </InView>

                <InView
                    threshold={0.15}
                    as={"section"}
                    id="projects"
                    className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                    onChange={(inView) => {
                        if (inView) {
                            setCurrentPath("projects");
                        }
                    }}
                >
                    <Projects />
                </InView>

                <InView
                    threshold={threshold}
                    as={"section"}
                    id="contributions"
                    className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                    onChange={(inView) => {
                        if (inView) {
                            setCurrentPath("contributions");
                        }
                    }}
                >
                    <Contributions />
                </InView>
            </div>
        </>
    );
}
