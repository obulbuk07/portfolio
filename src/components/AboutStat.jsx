import arrowDownRight from "../img/down-right.png"

function AboutStat({logo, count, name, link}){
    return(
        <div className="w-4/4 p-4 glass relative rounded bg-black h-22">
            <img className="h-5 w-5 absolute top-3 left-3" src={logo} alt="" />
            <p className="top-3 right-3 absolute">{count}</p>
            <p className="text-l absolute bottom-3 left-3">{name}</p>
            <a className="absolute bottom-3 right-3" href={link}><img className="w-3 h-3" src={arrowDownRight} alt="" /></a>
        </div>
    )
}
export default AboutStat;