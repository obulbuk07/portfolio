import Certeficat from "./Certeficat";
import wkm from "../img/wkm-certeficat.jpg"
import internetional from "../img/conference_certeficat.jpg"

const certeficats = [
    {
        img: wkm,
        name: "WKM - computer school certeficat"
    },
    {
        img: internetional,
        name: "International conference certeficat"
    },
    {/*{
        img: wkm,
        name: "Reward from IFNMU"
    },*/}
    
]


function Cetrteficates(){
    return(
        <div className=" grid gap-4 grid-cols-5">
            <h1 className="my-4 text-3xl col-span-5">My Certeficates</h1>
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