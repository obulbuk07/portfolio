import Skill from "./Skill";
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import react from "../img/react.png"
import scss from "../img/scss.png"
import tailwind from "../img/tailwind.webp"
import mysql from "../img/mysql.png"
import postgresql from "../img/postgre.png"
const skills = [
    {
        img: html,
        name: "HTML"
    },
    {
        img: css,
        name: "CSS"
    },
    {
        img: scss,
        name: "SCSS"
    },
    {
        img: js,
        name: "Java Script"
    },
    {
        img: react,
        name: "React.js"
    },
    {
        img: tailwind,
        name: "Tailwind CSS"
    },
    {
        img: mysql,
        name: "MySQL"
    },
    {
        img: postgresql,
        name: "PostgreSQL"
    },
]

function Skills(){
    return(
        <div className="grid grid-cols-7 gap-6 py-10">
            {skills.map(skill => (
                <Skill
                    img={skill.img}
                    name={skill.name}
                />
            ))}
        </div>
    )
}

export default Skills;