import HomeInfo from "./HomeInfo";

function Home(){
    return(
        <div className="border mx-auto w-3/4 grid grid-cols-2 my-16 text-white p-6">
            <HomeInfo/>
            <div>IMAGE</div>
        </div>
    )
}

export default Home;