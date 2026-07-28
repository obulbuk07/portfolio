function Certeficat({img, name}){
    return(
        <div className=" p-4">
            <img className=" rounded h-40" src={img} alt="" />
            <p className="text-gray-400 text-center pt-2 text-xs">{name}</p>
        </div>
    )
}
export default Certeficat;