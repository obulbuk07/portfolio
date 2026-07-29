import { useState } from "react";
import PortfolioModeChanger from "./PortfolioModeChanger";
import PortfolioProjects from "./PorfolioProjects";
import Cetrteficates from "./Certeficates";
import Skills from "./Skills";
import WorkExp from "./WorkExp";

const MODES = {
    PROJECTS: "Projects",
    CERTIFICATES: "Certificates",
    WORK_EXP: "Work Exp.",
    SKILLS: "Skills"
}

function Portfolio(){
    const [activeMode, setActiveMode] = useState(MODES.PROJECTS);

    const renderContent = () => {
        switch(activeMode){
            case MODES.PROJECTS:
                return <PortfolioProjects/>;
            case MODES.CERTIFICATES:
                return <Cetrteficates/>;
            case MODES.WORK_EXP:
                return <WorkExp/>;
            case MODES.SKILLS:
                return <Skills/>;
            default:
                return null;
        }
    }
    return(
        <div id="portfolio" className="w-9/10 md:w-3/4 text-white mx-auto mt-10 p-6 rise-in">
            <h1 className="text-center text-3xl">My Portfolio</h1>
            <p className="text-center p-4">Choose what you are interested in</p>
            <PortfolioModeChanger activeMode={activeMode} onModeChange={setActiveMode} />
            <div className="mt-10">
                {renderContent()}
            </div>
            
            
        </div>
    )
}
export default Portfolio;
