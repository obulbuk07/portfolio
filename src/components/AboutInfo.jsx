import DuoButtons from "./DuoButtons";
import TextType from "./TypeText";
import ScrambledText from "./ScrambledText"
import portfolio from "../../public/OleksandrBulbuk.pdf"

function AboutInfo(){
    return(
        <div className="col-span-3 md:col-span-2">
            <h1 className="text-5xl py-2 rise-in">Oleksandr</h1>
            <h1 className="text-5xl pb-2 rise-in">Bulbuk</h1>
            
            <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                 duration={1.2}
                speed={0.5}
                scrambleChars=".:"
            >
                Young Web Developer from Ukraine based in Łódź, Poland. I focus on creating clean, responsive, and user-friendly applications while constantly improving my skills and delivering high-quality solutions.
            </ScrambledText>
            
            
            <div className="glass py-2 px-4 bg-black rounded my-4 w-1/1 md:w3/4 h-20 md:h-10 rise-in">
                <TextType 
                    text={["Great things are built from small details", "Speed means nothing without precision.", "Simplicity is the hardest thing to build"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                />
            </div>
            <DuoButtons
                link1={portfolio}
                name1="Download CV"
                link2="#portfolio"
                name2="View Projects"
            />
        </div>
    )
}
export default AboutInfo;