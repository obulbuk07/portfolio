import AboutInfo from "./AboutInfo";
import AboutStat from "./AboutStat";

const stats = [
    {
        logo: "url",
        name: "projects",
        count: 2,
        link: "go"
    },
    {
        logo: "url",
        name: "certeficats",
        count: 1,
        link: "go"
    },
    {
        logo: "url",
        name: "work",
        count: 2,
        link: "go"
    },
]

function About(){
    return(
        <div className="w-3/4 mx-auto border text-white grid grid-cols-3 p-6 gap-6">
            <AboutInfo/>
            {/*<img src="#" alt="" />*/}
            <div className="bg-white w-70 h-70 rounded-full"></div>
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