function Skill({img, name}){
    return(
        <div className="bg-black rounded py-4 px-4 flex flex-col justify-between glass">
            <img className=" " src={img} alt="" />
            <p className="text-gray-500 text-center mt-2" clas>{name}</p>
        </div>
    )

}
export default Skill;