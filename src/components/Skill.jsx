function Skill({img, name}){
    return(
        <div className="h-35 group relative flex flex-col items-center gap-2 rounded-2xl border border-gray-800 bg-black p-4 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <img className=" h-16 w-16 transition-transform duration-300 group-hover:scale-110" src={img} alt="" />
            <p className="text-center mt-2 text-gray-500 transition-colors duration-300 group-hover:text-white" clas>{name}</p>
        </div>
    )

}
export default Skill;