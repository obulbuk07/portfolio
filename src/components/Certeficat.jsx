function Certeficat({img, name}){
    return(
        <div className=" col-span-5 md:col-span-1  p-4">
            <img className="mx-auto glass  rounded h-40" src={img} alt="" />
            <p className="text-gray-400 text-center pt-2 text-xs">{name}</p>
        </div>
    )
}
export default Certeficat;