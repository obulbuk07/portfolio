function PortfolioProject({img, date, name, info, link, github}){
    return(
        <div className="border rounded p-4 bg-black">
            <img className="h-40" src={img} alt="" />
            <p className="text-gray-600 text-s">{date}</p>
            <p className="text-xl">{name}</p>
            <p className="text-s text-gray-400">{info}</p>
            <div className="flex gap-2 py-4">
                <a className="px-6 border py-2 w-4/4 text-center" href={link}>Go Live</a>
                <a className="px-6 border py-2 w-4/4 text-center" href={github}>GitHub</a>
            </div>
            
        </div>
    )
}

export default PortfolioProject;