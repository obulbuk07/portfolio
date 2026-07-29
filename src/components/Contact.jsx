import ContactSocials from "./ContactSocilas";
import ContactForm from "./ContactForm";

function Contact(){
    return(
        <div id="contact" className=" w-3/4 text-white mx-auto mt-10 py-4 grid grid-cols-5 gap-10">
            <ContactSocials/>
            <ContactForm/>
        </div>
    )
}
export default Contact;