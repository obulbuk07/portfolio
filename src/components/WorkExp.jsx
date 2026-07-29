import WorkExpItem from "./WorkExpItem";
import ifnmu from "../img/ifnmu.png"
import lpp from "../img/lpp.png"

const workExp = [
    {
        img: lpp,
        name: "LPP Logistic",
        info: "Maintained and monitored automated warehouse robotics systems to streamline logistics operations, improve workflow efficiency, and fulfill daily supply chain tasks using modern technologies.",
        duration: "08.05.2024-31.08.2024"
    },
    {
        img: ifnmu,
        name: "IFNMU",
        info: "Creating and developing university projects such as Education Hub and Student Guide; developing university websites in a developer team using HTML, CSS, SCSS, JavaScript, and WordPress.",
        duration: "01.10.2022-01.10.2024"
    },
]
function WorkExp(){
    return(
        <div className="grid grid-cols-3 gap-4 rise-in-children">
            <h1 className="my-4 text-3xl col-span-3">My Work Expirience</h1>
            {workExp.map(item=>(
                <WorkExpItem
                    img={item.img}
                    name={item.name}
                    info={item.info}
                    duration={item.duration}
                />
            ))}

        </div>
    )
}

export default WorkExp;