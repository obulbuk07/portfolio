import AboutInfo from "./AboutInfo";
import AboutStat from "./AboutStat";

function About(){
    return(
        <div className="w-3/4 mx-auto border text-white">
            <AboutInfo/>
            <img src="#" alt="" />
            <div>
                // About stats
                <AboutStat/>
            </div>
        </div>
    )
}

export default About;