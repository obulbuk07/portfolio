function Navbar(){

    return(
        <div className="flex text-white glass sticky z-150 top-5 justify-between w-4/5 bg-black mx-auto px-4 py-2 rounded-full mt-4">
            <p className=" text-purple-500 text-xl oswald ">O.Bulbuk</p>
            <nav className="flex gap-3">
                <a className=" text-gray-400 hover:text-white transition" href="#home">Home</a>
                <a className=" text-gray-400 hover:text-white transition" href="#about">About</a>
                <a className=" text-gray-400 hover:text-white transition" href="#portfolio">Portfolio</a>
                <a className=" text-gray-400 hover:text-white transition" href="#contact">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar;