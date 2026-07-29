function WorkExpItem({img, name, info, duration}){

    return(
        <div className="gradient_bg col-span-3 md:col-span-1 glass bg-black p-4 rounded relative p-2">
            <img className="border rounded h-30 mb-6 bg-white p-4" src={img} alt="" />
            <p className="text-center text-xl py-2">{name}</p>
            <p className="text-gray-300 pb-10">{info}</p>
            <p className="text-gray-400 text-xs absolute bottom-3 right-3">{duration}</p>
        </div>
    )
}

export default WorkExpItem;