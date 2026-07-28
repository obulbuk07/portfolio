function WorkExpItem({img, name, info, duration}){

    return(
        <div className="border relative p-2">
            <img className="border h-40" src={img} alt="" />
            <p className="text-xl py-2">{name}</p>
            <p className="text-gray-400 pb-10">{info}</p>
            <p className="text-gray-600 text-xs absolute bottom-3 right-3">{duration}</p>
        </div>
    )
}

export default WorkExpItem;