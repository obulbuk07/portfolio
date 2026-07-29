import HomeInfo from "./HomeInfo";
import Lanyard from "./Lanyard";

function Home(){
    return(
        <div id="home" className="mx-auto w-3/4 grid grid-cols-3 relative gap-10 my-16 text-white p-6">
            
            <HomeInfo/>
            
            
        </div>
    )
}

export default Home;