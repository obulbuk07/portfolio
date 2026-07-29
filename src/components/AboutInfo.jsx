import DuoButtons from "./DuoButtons";
function AboutInfo(){
    return(
        <div className="col-span-2">
            <p className="text-gray-500">ABOUT ME</p>
            <h1 className="text-5xl py-2">Oleksandr</h1>
            <h1 className="text-5xl pb-2">Bulbuk</h1>
            <p className="py-2 w-3/4 text-gray-400">Young Web Developer from Ukraine based in Łódź, Poland. I focus on creating clean, responsive, and user-friendly applications while constantly improving my skills and delivering high-quality solutions.</p>
            <div className="glass py-2 px-4 bg-black rounded my-4 w-3/4"><p>Great things are built from small details</p></div>
            <DuoButtons
                link1="#"
                name1="Download CV"
                link2="#"
                name2="View Projects"
            />
        </div>
    )
}
export default AboutInfo;