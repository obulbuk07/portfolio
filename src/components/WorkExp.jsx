import WorkExpItem from "./WorkExpItem";
import ifnmu from "../img/ifnmu.png"
import lpp from "../img/lpp.png"

const workExp = [
    {
        img: lpp,
        name: "LPP Logistic",
        info: "Maintain werhouse robotics, complete logistic tasks by using new technoligies.",
        duration: "08.05.2024-31.08.2024"
    },
    {
        img: ifnmu,
        name: "IFNMU",
        info: "Creating and developing projects for uniwersity such as Education Hub and Student Guide, developing university website in team of developers using HTML, CSS, SCSS, Java Script and Wordpress.",
        duration: "01.10.2022-01.10.2024"
    },
]
function WorkExp(){
    return(
        <div className="grid grid-cols-3 gap-4">
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