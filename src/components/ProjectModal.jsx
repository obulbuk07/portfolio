import { useEffect } from "react";
import { createPortal } from "react-dom";
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

    const skills = project.skills;

    return createPortal(
        <div
            className="fixed top-0 bg-black/90 mx-auto md:w-3/4 w-4/4 text-white inset-0 flex items-start justify-start z-50 px-4 pt-30 pb-4"
            onClick={onClose}
        >
           <div className="w-4/4 p-4 grid grid-cols-3 grid-ros-2 gap-4" onClick={(e) => e.stopPropagation()}>
                <div className="glass p-2 p-4 bg-black md:col-span-1 col-span-3 hidden md:flex w-4/4  flex-col justify-between row-span-2">
                    <img className="h-38 rounded" src={project.img} alt="" />
                    <p className="text-2xl py-1">{project.name}</p>
                    <p className="text-s text-gray-400">{project.info}</p>
                    <DuoButtons className="pt-2"
                        link1={project.link}
                        name1="Go Live"
                        link2={project.github}
                        name2="Git Hub"
                    />  
                </div>
                <div className="w-4/4 border md:col-span-2 col-span-3 glass p-4">
                    <h1 className="text-3xl pb-2 text-gray-300">Details</h1>
                    <p className="text-gray-500 pb-0">{project.details}</p>
                </div>
                <div className="glass h-1/1 w-4/4 md:col-span-2 col-span-3 p-4">
                    <h1 className="text-3xl pb-2 text-gray-300">Used technologies</h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {skills.map(skill => (
                            <div key={skill} className="glass py-2 px-4">{skill}</div>
                        ))}
                    </div>
                </div>
           </div>
            <button onClick={onClose} className="text-xl absolute right-2 top-30">X</button>
        </div>,
        document.body
    );
}

export default ProjectModal;