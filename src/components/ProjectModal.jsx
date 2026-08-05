import { useEffect } from "react";
import DuoButtons from "./DuoButtons";

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    return (
        <div
            className="fixed top-30 mx-auto border w-4/4 inset-0 bg-black/96 flex items-start justify-start z-50 p-4"
            onClick={onClose}
        >
           <button
            onClick={onClose}
           >
             -- Back
           </button>
           <div className=" w-4/4 h-1/1 pt-15 grid grid-cols-2 gap-20" >
                <div className=" glass p-2 p-4 bg-black flex flex-col justify-between">
                    <img className="h-40 rounded" src={project.img} alt="" />
                    <p className="text-gray-600 text-s">{project.date}</p>
                    <p className="text-2xl py-2 ">{project.name}</p>
                    <p className="text-s text-gray-400">{project.info}</p>
                    <DuoButtons className=""
                        link1={project.link}
                        name1="Go Live"
                        link2={project.github}
                        name2="Git Hub"

                    />  
                </div>
           </div>

        </div>
    );
}

export default ProjectModal;