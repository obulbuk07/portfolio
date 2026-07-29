import arrowDownRight from "../img/down-right.png"

function AboutStat({logo, count, name, link}){
    return(
        <div className=" gradient_bg w-4/4 p-4 glass relative rounded h-22 rise-in-children">
            <img className="h-5 w-5 absolute top-3 left-3 rise-in" src={logo} alt="" />
            <p className="top-3 right-3 absolute rise-in">{count}</p>
            <p className="text-l absolute bottom-3 left-3 rise-in">{name}</p>
            <a className="absolute bottom-3 right-3 rise-in" href={link}><img className="w-3 h-3" src={arrowDownRight} alt="" /></a>
        </div>
    )
}
export default AboutStat;