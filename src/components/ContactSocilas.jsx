import SocialMedia from "./SocialMedia"

const socials = [
    {
        img: "ff",
        name: "telegram"
    },
    {
        img: "ff",
        name: "telegram"
    },
    {
        img: "ff",
        name: "telegram"
    },
    {
        img: "ff",
        name: "telegram"
    },
    {
        img: "ff",
        name: "telegram"
    },
]

function ContactSocials(){
    return(
        <div>
            <h1>Find me on solcials media</h1>
            <img className="border text-white h-50 w-50" src="" alt="" />
            {socials.map(social => (
                <SocialMedia
                    img={social.img}
                    name={social.name}
                />
            ))}
        </div>
    )
}
export default ContactSocials;