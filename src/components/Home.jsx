import HomeInfo from "./HomeInfo";
import Lanyard from "./Lanyard";

function Home(){
    return(
        <div id="home" className="mx-auto md:w-3/4 w-9/10  grid grid-cols-3 relative gap-10 mt-120 md:mt-2 md:mb-30 md:my-2 text-white p-6">
            
            <HomeInfo/>
            
            
        </div>
    )
}

export default Home;