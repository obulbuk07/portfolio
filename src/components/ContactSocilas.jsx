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
        link:"https://t.me/sbulbuk",
        img: telegram,
        name: "Telegram"
    },
    {
        link:"https://www.linkedin.com/in/oleksandr-bulbuk-59160b263?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        img: linkedin,
        name: "LinkedIn"
    },
    {
        link:"https://github.com/obulbuk07",
        img: github,
        name: "GitHub"
    },
    {
        link:"https://www.instagram.com/sasha_blbk?igsh=cmgzaDgwcm82Zjhk&utm_source=qr",
        img: instagram,
        name: "Instagram"
    },
    {
        link:"https://www.facebook.com/share/191hWPCNvb/?mibextid=wwXIfr",
        img: facebook,
        name: "Facebook"
    },
    {
        link:"mailto:sbulbuk@gmail.com",
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
                        link={social.link}
                    />
                ))}
            </div>
            
        </div>
    )
}
export default ContactSocials;