import HomeSkill from "./HomeSkill";
import ScrambledText from "./ScrambledText";
import ShinyText from "./ShinyText";
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const skills = ["Java Script", "HTML", "CSS", "Tailwind", "React.js"]

function HomeInfo(){
    
    return(
        <div className="col-span-2 fall-in">
            <ShinyText
                text="✨ Available for work"
                speed={5}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
            />
            <BlurText
                text="Frontend"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-6xl py-0 mb-2"
            />
            <BlurText
                text="Developer"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-6xl pb-4 text-purple-500 mb-4"
            />
            <p className="pt-3 pb-0 tracking-widest fall-in">Hello World!</p>
            <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                 duration={1.2}
                speed={0.5}
                scrambleChars=".:"
            >
                Create modern, high-performance websites using the latest technologies. Help your business make data-driven decisions, follow market trends, and build innovative digital solutions that increase revenue and accelerate growth.
            </ScrambledText>
            
            <div className="flex gap-2 py-2 rise-in">
                {skills.map(skill =>(
                    <HomeSkill name={skill}/>
                ))}
            </div>
            <p className="text-gray-500 pt-2 fall-in">explore my expirience below</p>
            <p className="text-gray-500 fall-in">open to full-time & freelance opportunitties</p>
        </div>
    )
}

export default HomeInfo;