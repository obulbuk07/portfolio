
function DuoButtons({name1, link1, name2, link2}){
    return(
        <div className="flex flex-col md:flex-row gap-4 pt-4 rise-in">
            <a className="light_button w-4/4 text-center" href={link1}>{name1}</a>
            <a className="purple_button bg-purple-500 border-purple-500 w-4/4 text-center" href={link2}>{name2}</a>
        </div>
    )
}
export default DuoButtons;