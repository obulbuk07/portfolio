import PortfolioProject from "./PortfolioProject";
const projects = [
    {
        img: "src",
        date: "23.04.2022",
        name: "Portfolio",
        info: "My portfolio",
        link: "https//",
        github: "github",
    },
    {
        img: "src",
        date: "20.06.2024",
        name: "SkillSwap",
        info: "Online platform, where people can shearing or learning new skills from each other.",
        link: "https//",
        github: "github",
    },
    {
        img: "src",
        date: "23.04.2023",
        name: "Student Guide",
        info: "Guide for first year students of Ivano-Frankiwsk Nation Medical Uniwersity, where they can find all information about corpuses, student cafes, student organisations and location of university.",
        link: "http://collegeifnmu.co.uk/StudentGit/index.html",
        github: "github",
    },
    {
        img: "src",
        date: "10.10.2022",
        name: "Education Hub",
        info: "Platform where students can learn online by watching videos and reading lectuares developed for Ivano-Frankiwsk National Medical Uniwersity.",
        link: "http://collegeifnmu.co.uk/index.html",
        github: "github",
    },
]

function PortfolioProjects(){

    return(
        <div className="border grid grid-cols-3 gap-4 py-8 mt-4">
            {projects.map(project => (
                <PortfolioProject
                    img={project.img}
                    date={project.date}
                    name={project.name}
                    info={project.info}
                    link={project.link}
                    github={project.github}
                />
            ))}
        </div>
    )
}
export default PortfolioProjects;