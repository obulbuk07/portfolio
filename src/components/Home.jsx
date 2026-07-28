import HomeInfo from "./HomeInfo";

function Home(){
    return(
        <div className="mx-auto w-3/4 grid grid-cols-3 gap-10 my-16 text-white p-6">
            <HomeInfo/>
            <div className="w-70 h-100 bg-white rounded">IMAGE</div>
        </div>
    )
}

export default Home;