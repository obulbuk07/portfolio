import DuoButtons from "./DuoButtons";
function PortfolioProject({img, date, name, info, link, github}){
    return(
        <div className="glass gradient_bg rounded p-4 bg-black flex flex-col justify-between">
            <img className="h-40 rounded" src={img} alt="" />
            <p className="text-gray-600 text-s">{date}</p>
            <p className="text-2xl py-2 ">{name}</p>
            <p className="text-s text-gray-400">{info}</p>
            <DuoButtons
                link1={link}
                name1="Go Live"
                link2={github}
                name2="Git Hub"

            />          
        </div>
    )
}

export default PortfolioProject;