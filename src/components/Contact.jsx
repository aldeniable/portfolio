import { CONTACTS } from "../data/data.js";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
const Contact = () => {

    return (
        <div className = "border-b border-neutral-900 pb-4">
            <h1 className = "my-10 text-center text-4xl font-bold"> Contact Me </h1>
            <div className = "flex flex-wrap items-center justify-center gap-4">     
                <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://linkedin.com/in/alden-robell-de-loyola-0b9539288"> 
                        <FaLinkedin/>
                    </a>
                    <a  href="https://github.com/aldeniable">
                        <FaGithub/>
                    </a>
                    <a href="https://www.hackerrank.com/profile/aldenrmd10">
                        <FaHackerrank/>
                    </a>
                </div> 
            </div>
            {CONTACTS.map((contact, index) => (
                <div key = {index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className = "w-full max-w-xl lg:w-3/4">
                        <h6 className = "mb-2 font-semibold text-center"> {contact.address} </h6>
                        <h6 className = "mb-2 font-semibold text-center"> {contact.phone} </h6>      
                        <h6 className = "mb-2 font-semibold text-center"> {contact.email} </h6>
                    </div>
                </div>
            ))}
        </div>
    );
    
};

export default Contact;