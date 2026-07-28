function PortfolioProject({img, date, name, info, link, github}){
    return(
        <div className=" rounded p-4 bg-black flex flex-col justify-between">
            <img className="h-40 rounded" src={img} alt="" />
            <p className="text-gray-600 text-s">{date}</p>
            <p className="text-2xl py-2 ">{name}</p>
            <p className="text-s text-gray-400">{info}</p>
            <div className="flex gap-2 py-4">
                <a className="px-6 border py-2 w-4/4 text-center hover:bg-white hover:text-black" href={link}>Go Live</a>
                <a className="px-6 border py-2 w-4/4 text-center bg-white text-black hover:bg-black/0 hover:border-white  hover:text-white" href={github}>GitHub</a>
            </div>
            
        </div>
    )
}

export default PortfolioProject;