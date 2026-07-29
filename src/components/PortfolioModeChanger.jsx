const items = ["Projects", "Certeficates", "Work Exp.", "Skills"]

function PortfolioModeChanger({activeMode, onModeChange}){
    return(
        <div className="w-9/10 md:w-2/4 md:bg-none bg-black glass mx-auto flex flex-col md:flex-row justify-center gap-4 bg-black py-2 px-4 rounded-full rise-in">
            {items.map((item) => (
                <button
                    key={item}
                    onClick={() => onModeChange(item)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                        activeMode === item
                            ? "bg-purple-500 text-white"
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default PortfolioModeChanger;