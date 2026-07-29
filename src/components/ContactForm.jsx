function ContactForm(){
    return(
        <div className="gradient_bg p-4 glass col-span-3">
            <form className="flex flex-col gap-2 p-4 w-2/3 mx-auto " >
                <h1 className="text-2xl text-center mb-6">Contact me</h1>
                <label htmlFor="name">Enter your name</label>
                <input className=" glass border rounded-full px-4 py-2 mb-4 w-3/3" id="name" type="text" />
                <label htmlFor="email">Enter your email</label>
                <input className=" glass border rounded-full px-4 py-2 mb-4 w-3/3" id="email" type="text" />
                <label htmlFor="messege">Enter your messege</label>
                <textarea className=" glass border rounded px-4 py-2 w-3/3 h-40 mb-4" name="" id=""></textarea>
                <button className="purple_button bg-purple-500 border-purple-500 border rounded w-2/3 p-2 w-3/3">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;