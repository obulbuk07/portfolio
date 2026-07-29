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
        img: telegram,
        name: "Telegram"
    },
    {
        img: linkedin,
        name: "LinkedIn"
    },
    {
        img: github,
        name: "GitHub"
    },
    {
        img: instagram,
        name: "Instagram"
    },
    {
        img: facebook,
        name: "Facebook"
    },
    {
        img: gmail,
        name: "Gmail"
    },
]

function ContactSocials(){
    return(
        <div className="col-span-2 border glass p-4">
            <img className=" rounded-full text-white h-50 w-50 mx-auto" src={photo} alt="" />
            <h1 className="text-2xl text-center my-10">Find me on solcials media</h1>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
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