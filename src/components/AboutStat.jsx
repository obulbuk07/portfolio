function AboutStat({logo, count, name, link}){
    return(
        <div>
            <img src={logo} alt="" />
            <p>{count}</p>
            <p>{name}</p>
            <a href={link}>go</a>
        </div>
    )
}
export default AboutStat;