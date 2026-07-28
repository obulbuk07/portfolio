function Skill({img, name}){
    return(
        <div className="border p-2">
            <img className="h-30 border" src={img} alt="" />
            <p className="text-gray-500 text-center mt-2" clas>{name}</p>
        </div>
    )

}
export default Skill;