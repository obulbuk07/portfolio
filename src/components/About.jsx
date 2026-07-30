import AboutInfo from "./AboutInfo";
import AboutStat from "./AboutStat";
import aboutProject from "../img/about-project.png"
import aboutCerteficat from "../img/about-certeficat.png"
import aboutWork from "../img/about-work.png"
import aboutPhoto from "../img/about-photo.jpg"

const stats = [
    {
        logo: aboutProject,
        name: "Projects",
        count: 3,
        link: "go"
    },
    {
        logo: aboutCerteficat,
        name: "Сertificates",
        count: 2,
        link: "go"
    },
    {
        logo: aboutWork,
        name: "Completed Jobs",
        count: 2,
        link: "go"
    },
]

function About(){
    return(
        <div id="about" className="w-9/10 md:w-3/4 mx-auto text-white grid grid-cols-3 p-6 gap-6 rise-in md:mb-30">
            <AboutInfo/>
            <img className=" row-start-1 rounded-full hover:brightness-75 w-1/1 md:w-3/4 col-span-3 md:col-span-1 " src={aboutPhoto} alt="" />
            
            <div className="col-span-3 flex flex-col md:flex-row gap-2 mt-4">
                {stats.map(stat =>(
                    <AboutStat
                        logo={stat.logo}
                        name={stat.name}
                        count={stat.count}
                        link={stat.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default About;