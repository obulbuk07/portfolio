import PortfolioProject from "./PortfolioProject";
const projects = [
    {
        img: "src",
        date: "23.04.2022",
        name: "EduHub",
        info: "This is project for IFNMU",
        link: "https//",
        github: "github",
    },
    {
        img: "src",
        date: "23.04.2022",
        name: "EduHub",
        info: "This is project for IFNMU",
        link: "https//",
        github: "github",
    },
    {
        img: "src",
        date: "23.04.2022",
        name: "EduHub",
        info: "This is project for IFNMU",
        link: "https//",
        github: "github",
    },
    {
        img: "src",
        date: "23.04.2022",
        name: "EduHub",
        info: "This is project for IFNMU",
        link: "https//",
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