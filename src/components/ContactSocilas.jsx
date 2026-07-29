import SocialMedia from "./SocialMedia"
import photo from "../img/about-photo.jpg"
import telegram from "../img/telegram.png"
import linkedin from "../img/linkedin.png"
import instagram from "../img/instagram.png"
import gmail from "../img/gmail.png"
import facebook from "../img/facebook.png"
import github from "../img/github.png"
const socials = [
    {
        link:"",
        img: telegram,
        name: "Telegram"
    },
    {
        link:"",
        img: linkedin,
        name: "LinkedIn"
    },
    {
        link:"",
        img: github,
        name: "GitHub"
    },
    {
        link:"",
        img: instagram,
        name: "Instagram"
    },
    {
        link:"",
        img: facebook,
        name: "Facebook"
    },
    {
        link:"",
        img: gmail,
        name: "Email"
    },
]

function ContactSocials(){
    return(
        <div className=" gradient_bg col-span-5 md:col-span-2 border glass p-4 rise-in">
            <img className=" rounded-full text-white h-50 w-50 mx-auto" src={photo} alt="" />
            <h1 className="text-2xl text-center my-10">Find me on socials media</h1>
            
            <div className="grid grid-cols-2 gap-4 mt-6 rise-in">
                {socials.map(social => (
                    <SocialMedia
                        img={social.img}
                        name={social.name}
                    />
                ))}
            </div>
            
        </div>
    )
}
export default ContactSocials;