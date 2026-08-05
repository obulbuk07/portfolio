import { useState } from "react";

import PortfolioProject from "./PortfolioProject";
import ProjectModal from "./ProjectModal";

import eduhub from "../img/edu-hub.jpg"
import studentGuide from "../img/student-guide.jpg"
import skillswap from "../img/skillswap.jpg"
import portfolio from "../img/portfolio.jpg"

const projects = [
    {
        img: skillswap,
        date: "05.08.2026",
        name: "Skillswap",
        info: "SkillSwap is a full-stack skill-sharing platform built with React and Node.js that enables users to exchange knowledge. It features encrypted authentication, email notifications, and dynamic skill management linked to a database.",
        link: "https://skillswap-client-lac.vercel.app/",
        skills: ["HTML", "CSS", "Tailwind CSS", "Java Script", "React JS", "node.js", "Postgre SQL", "Git"],
        github: "https://github.com/obulbuk07/skillswap-client",
        details: "SkillSwap is a full-stack peer-to-peer skill-sharing platform engineered to connect users seeking to exchange knowledge and expertise in a collaborative digital environment. Built with a responsive React frontend and a robust Node.js backend, the application features secure user authentication powered by password encryption, an automated email notification system for seamless user communication, and dynamic database integration enabling full CRUD operations to add, manage, and remove skills in real time."
    },
    {
        img: portfolio,
        date: "23.04.2022",
        name: "Portfolio",
        info: "A modern, responsive portfolio built using HTML, CSS, JavaScript, and React.js to showcase my frontend development skills, interactive web projects, and dynamic user interface designs.",
        link: "https://portfolio-my-team-b0ed.vercel.app/#portfolio",
        skills: ["HTML", "CSS", "Tailwind CSS", "Java Script", "React JS", "Git"],
        github: "https://github.com/obulbuk07/portfolio",
        details: "Built with React.js, JavaScript, HTML5, and CSS3, this dynamic, responsive portfolio showcases my frontend skills and interactive projects. Developed in VS Code using modular component architecture, the project maintains clean, maintainable code quality. Version control was systematically managed with Git and GitHub to ensure structured commit tracking, while Vercel was used for deployment, establishing an automated CI/CD pipeline that delivers high performance and fast global load speeds with every main push."
    },
    {
        img: studentGuide,
        date: "23.04.2023",
        name: "Student Guide",
        info: "Designed for new students of Ivano-Frankivsk National Medical University, this guide helps navigate campus life by detailing university buildings, local cafes, student organizations, and key locations.",
        link: "http://collegeifnmu.co.uk/StudentGit/index.html",
        skills: ["HTML", "CSS", "SCSS", "Java Script", "Git"],
        github: "https://github.com/obulbuk07/StudentGuide",
        details: "Developed as a practical digital navigation hub, this project simplifies campus transition for incoming freshmen at Ivano-Frankivsk National Medical University. The platform synthesizes essential local infrastructure into a single, accessible interface—covering academic halls, student organizations, and local spots. Engineered with responsive web technologies, the app prioritizes fast page loads, clean UI component organization, and effortless mobile navigation."
    },
    {
        img: eduhub,
        date: "10.10.2022",
        name: "Education Hub",
        info: "An online educational platform developed for Ivano-Frankivsk National Medical University, allowing students to learn remotely by watching video lectures and studying interactive course materials.",
        link: "http://collegeifnmu.co.uk/index.html",
        skills: ["HTML", "CSS", "SCSS", "Java Script", "Git"],
        github: "https://github.com/obulbuk07/eduhub",
        details: "Engineered to facilitate seamless remote learning for Ivano-Frankivsk National Medical University, this digital platform serves as a centralized hub for medical education. It offers structured access to video lectures, interactive learning materials, and course progress tracking. Designed with an emphasis on performance, secure data handling, and clean navigation, the system ensures a reliable and engaging learning experience across all devices."
    },
]

function PortfolioProjects(){
    const[selectedProject, setSelectedProject] = useState(null)

    return(
        <div className=" grid grid-cols-3 gap-4 py-8 mt-4 rise-in-children">
            <h1 className="my-4 text-3xl col-span-3">My Projects</h1>
            {projects.map(project => (
                <PortfolioProject
                    key={project.name}
                    img={project.img}
                    date={project.date}
                    name={project.name}
                    info={project.info}
                    link={project.link}
                    github={project.github}
                    onGoMore={() => setSelectedProject(project)}
                />
            ))}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}
export default PortfolioProjects;