import HomeInfo from "./HomeInfo";
import Lanyard from "./Lanyard";

function Home(){
    return(
        <div id="home" className="mx-auto w-3/4 grid grid-cols-3 relative gap-10 my-16 text-white p-6">
            
            <HomeInfo/>
            <div className="relative">
                {/*<Lanyard position={[0, 0, 20]} lanyardWidth={1} gravity={[0, -40, 0]} />*/}
            </div>
            
        </div>
    )
}

export default Home;