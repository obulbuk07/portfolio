function AboutStat({logo, count, name, link}){
    return(
        <div className="w-4/4 border p-4 relative rounded bg-black h-22">
            <img src={logo} alt="" />
            <p className="top-3 right-3 absolute">{count}</p>
            <p className="text-l absolute bottom-3 left-3">{name}</p>
            <a className="absolute bottom-3 right-3" href={link}>go</a>
        </div>
    )
}
export default AboutStat;