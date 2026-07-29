function SocialMedia({img, name, link}){
    return(
        <a href={link}>
            <div className=" socials hover:bg-purple-500 glass text white flex items-center md:gap-4 gap-2 p-4 rise-in">
                <img className=" h-10" src={img} alt=""  />
                <p>{name}</p>
            </div>
        </a>
        
    )
    
}
export default SocialMedia;