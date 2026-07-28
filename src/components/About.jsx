import AboutInfo from "./AboutInfo";
import AboutStat from "./AboutStat";
import aboutProject from "../img/about-project.png"
import aboutCerteficat from "../img/about-certeficat.png"
import aboutWork from "../img/about-work.png"
import aboutPhoto from "../img/about-photo.jpg"

const stats = [
    {
        logo: aboutProject,
        name: "projects",
        count: 4,
        link: "go"
    },
    {
        logo: aboutCerteficat,
        name: "certeficats",
        count: 1,
        link: "go"
    },
    {
        logo: aboutWork,
        name: "work",
        count: 2,
        link: "go"
    },
]

function About(){
    return(
        <div className="w-3/4 mx-auto border text-white grid grid-cols-3 p-6 gap-6">
            <AboutInfo/>
            <img className="rounded-full" src={aboutPhoto} alt="" />
            
            <div className="col-span-3 flex gap-2 mt-4">
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