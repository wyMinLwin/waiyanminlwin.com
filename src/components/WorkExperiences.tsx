import React from "react";

const experiences = [
    {
        title: "Developer",
        company: "Fusion Solution Co., Ltd.",
        description:
            "Developed user-centric platforms and AI-powered applications, including an insurance purchasing platform with Vue.js and Shadcn UI, an HR hiring platform and CV review application with React, and a feature-rich chatbot using Vue.js. Actively contributed to agile workflows, ensuring seamless feature delivery and collaborative sprint execution.",
        startDate: "May, 2024",
        endDate: "Present",
        stacks: ["Vue.js", "React", "ASP.Net Core", "Shadcn UI", "Azure"],
    },
    {
        title: "Junior Developer",
        company: "Thetys Co., Ltd.",
        description:
            "Developed a Restaurant POS system and booking platform using Vue.js, Vuetify, Pinia, and ASP.Net Core Web API, ensuring robust functionality and seamless user experience. Collaborated in an agile environment with sprint-based development and weekly progress meetings for feedback and task alignment.",
        startDate: "May, 2023",
        endDate: "April, 2024",
        stacks: ["Vue.js", "ASP.Net Core", "Vuetify", "Azure"],
    },
    {
        title: "Frontend Developer",
        company: "Tech Startup",
        description:
            "Developed a video player platform for web and mobile using React and React Native, later re-engineering it with Next.js to enhance performance and maintainability. Collaborated with stakeholders to ensure technical solutions aligned with business objectives.",
        startDate: "Dec, 2022",
        endDate: "April, 2023",
        stacks: ["Next.js", "React", "React Native", "Firebase"],
    },
];

const WorkExperiences = () => {
    return (
        <div className="space-y-4">
            <h2 className="font-display text-xl tracking-wide font-semibold sm:text-2xl md:text-3xl">
                Experiences
            </h2>
            <div className="space-y-6">
                {experiences.map((experience, index) => (
                    <article
                        key={index}
                        className="space-y-1 p-4 border-[1px] transition-all duration-200 border-mute/20 rounded-lg shadow-sm shadow-mute/10 bg-white hover:bg-[#fafaf9]"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold space-x-1 tracking-wide">
                            <span>{experience.title}</span>
                            <span className="text-sm font-display">&bull;</span>
                            <span className="text-lg sm:text-xl font-normal">
                                {experience.company}
                            </span>
                        </h3>
                        <p className="text-black/70 text-sm sm:text-base">
                            {experience.startDate} &mdash; {experience.endDate}
                        </p>
                        <p className="text-base sm:text-lg">
                            {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {experience.stacks.map((stack, index) => (
                                <span key={index} className="c-btn">
                                    {stack}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default WorkExperiences;
