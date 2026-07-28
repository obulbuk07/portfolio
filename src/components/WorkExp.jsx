import WorkExpItem from "./WorkExpItem";
const workExp = [
    {
        img: "src",
        name: "IFNMU",
        info: "ldjs;fk[pvm[aplfafln'vfka pofvjlfvam fladv'lfm'fkl dlf;fldlf; fkfghj hd dfhjfh jhf f",
        duration: "01.10.2022-01.10.2024"
    },
    {
        img: "src",
        name: "IFNMU",
        info: "ldjs;fk[pvm[aplfafln'vfka pofvjlfvam fladv'lfm'fkl dlf;fldlf; fkfghj hd dfhjfh jhf f",
        duration: "01.10.2022-01.10.2024"
    },
    {
        img: "src",
        name: "IFNMU",
        info: "ldjs;fk[pvm[aplfafln'vfka pofvjlfvam fladv'lfm'fkl dlf;fldlf; fkfghj hd dfhjfh jhf f",
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