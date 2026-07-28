import Skill from "./Skill";

const skills = [
    {
        img: "src",
        name: "CSS"
    },
    {
        img: "src",
        name: "HTML"
    },
    {
        img: "src",
        name: "CSS"
    },
    {
        img: "src",
        name: "HTML"
    },
    {
        img: "src",
        name: "CSS"
    },
    {
        img: "src",
        name: "HTML"
    },
]

function Skills(){
    return(
        <div className="grid grid-cols-7 gap-2">
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