function SocialMedia({img, name, link}){
    return(
        <a href={link}>
            <div className=" socials hover:bg-purple-500 glass text white flex items-center gap-4 p-4 ">
                <img className=" h-10" src={img} alt="" />
                <p>{name}</p>
            </div>
        </a>
        
    )
    
}
export default SocialMedia;