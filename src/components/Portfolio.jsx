import PortfolioModeChanger from "./PortfolioModeChanger";
function Portfolio(){
    return(
        <div className="w-3/4 border text-white mx-auto mt-10 p-6">
            <h1 className="text-center text-3xl">My Portfolio</h1>
            <p className="text-center p-4">Choose what you are interesting about</p>
            <PortfolioModeChanger/>
        </div>
    )
}
export default Portfolio;
