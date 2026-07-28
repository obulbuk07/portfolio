import HomeSkill from "./HomeSkill";

const skills = ["Java Script", "HTML", "CSS", "Tailwind", "React.js"]

function HomeInfo(){
    
    return(
        <div className="col-span-2">
            <p className="text-gray-400 tracking-widest py-2 flex items-center gap-2" ><div className="shadow-xl w-2 h-2 rounded-full bg-gray-400 "></div>Available for work</p>
            <h1 className="text-6xl py-0">Frontend</h1>
            <h1 className="text-6xl pb-4 text-gray-400" >Developer</h1>
            <p className="pt-3 pb-0 tracking-widest">Hello World!</p>
            <p className="pt-2 pb-2">Create modern, high-performance websites using the latest technologies. Help your business make data-driven decisions, follow market trends, and build innovative digital solutions that increase revenue and accelerate growth.</p>
            <div className="flex gap-2 py-2">
                {skills.map(skill =>(
                    <HomeSkill name={skill}/>
                ))}
            </div>
            <p className="text-gray-500 pt-2">explore my expirience below</p>
            <p className="text-gray-500">open to full-time & freelance opportunitties</p>
        </div>
    )
}

export default HomeInfo;