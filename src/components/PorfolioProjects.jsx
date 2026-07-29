import PortfolioProject from "./PortfolioProject";
import eduhub from "../img/edu-hub.jpg"
import studentGuide from "../img/student-guide.jpg"
import skillswap from "../img/skillswap.jpg"
import portfolio from "../img/portfolio.jpg"

const projects = [
    {
        img: portfolio,
        date: "23.04.2022",
        name: "Portfolio",
        info: "A modern, responsive portfolio built using HTML, CSS, JavaScript, and React.js to showcase my frontend development skills, interactive web projects, and dynamic user interface designs.",
        link: "https//",
        github: "github",
    },
    {
        img: skillswap,
        date: "20.06.2024",
        name: "SkillSwap",
        info: "An interactive online platform where people can share and learn new skills together. It allows users to connect, collaborate, learn, and offer peer-to-peer coaching effortlessly.",
        link: "https//",
        github: "github",
    },
    {
        img: studentGuide,
        date: "23.04.2023",
        name: "Student Guide",
        info: "Designed for new students of Ivano-Frankivsk National Medical University, this guide helps navigate campus life by detailing university buildings, local cafes, student organizations, and key locations.",
        link: "http://collegeifnmu.co.uk/StudentGit/index.html",
        github: "github",
    },
    {
        img: eduhub,
        date: "10.10.2022",
        name: "Education Hub",
        info: "An online educational platform developed for Ivano-Frankivsk National Medical University, allowing students to learn remotely by watching video lectures and studying interactive course materials.",
        link: "http://collegeifnmu.co.uk/index.html",
        github: "github",
    },
]

function PortfolioProjects(){

    return(
        <div className=" grid grid-cols-3 gap-4 py-8 mt-4 rise-in-children">
            <h1 className="my-4 text-3xl col-span-3">My Projects</h1>
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