import DuoButtons from "./DuoButtons";
function PortfolioProject({img, date, name, info, link, github, onGoMore}){
    return(
        <div className="glass gradient_bg rounded col-span-3 md:col-span-1 p-4 bg-black flex flex-col justify-between">
            <img className="h-40 rounded" src={img} alt="" />
            <p className="text-gray-600 text-s">{date}</p>
            <p className="text-2xl py-2 ">{name}</p>
            <p className="text-s text-gray-400">{info}</p>
            <DuoButtons className=""
                link1={link}
                name1="Go Live"
                link2={github}
                name2="Git Hub"

            />  
            <button className="light_button mt-4" onClick={onGoMore} >Go more</button>        
        </div>
    )
}

export default PortfolioProject;