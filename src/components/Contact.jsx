import ContactSocials from "./ContactSocilas";
import ContactForm from "./ContactForm";

function Contact(){
    return(
        <div id="contact" className=" md:w-3/4 w-9/10 text-white mx-auto mt-10 py-4 md:mb-20 grid grid-cols-5 gap-10">
            <ContactSocials/>
            <ContactForm/>
        </div>
    )
}
export default Contact;