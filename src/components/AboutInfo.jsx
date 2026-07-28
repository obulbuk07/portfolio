function AboutInfo(){
    return(
        <div className="col-span-2">
            <p>ABOUT ME</p>
            <h1 className="text-4xl py-2">Oleksandr</h1>
            <h1 className="text-4xl pb-2">Bulbuk</h1>
            <p className="py-2 w-3/4">Young Web Developer from Ukraine based in Łódź, Poland. I focus on creating clean, responsive, and user-friendly applications while constantly improving my skills and delivering high-quality solutions.</p>
            <div className="py-2 px-4 bg-black rounded my-4 w-3/4"><p>Great things are built from small details</p></div>
            <div className="flex gap-4">
                <button className="border p-4"><img src="" alt="" /> <p>Download CV</p></button>
                <button className="border p-4"><img src="" alt="" /> <p>View Projects</p></button>
            </div>
        </div>
    )
}
export default AboutInfo;