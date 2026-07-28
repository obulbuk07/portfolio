import Certeficat from "./Certeficat";

const certeficats = [
    {
        img: "src",
        name: "IFNMU"
    },
    {
        img: "src",
        name: "WKM"
    },
    {
        img: "src",
        name: "IFNMU"
    },
    {
        img: "src",
        name: "WKM"
    },
    {
        img: "src",
        name: "IFNMU"
    },
    {
        img: "src",
        name: "WKM"
    },
    
]


function Cetrteficates(){
    return(
        <div className=" border grid gap-4 grid-cols-5">
            {certeficats.map(certeficat => (
                <Certeficat
                    img={certeficat.img}
                    name={certeficat.name}
                />
            ))}
        </div>
    )
}

export default Cetrteficates;