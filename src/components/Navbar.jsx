function Navbar(){

    return(
        <div className="flex text-white justify-between w-4/5 bg-black mx-auto px-4 py-2 rounded-full mt-4">
            <p>Oleksandr.Bulbuk</p>
            <nav className="flex gap-3">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar;