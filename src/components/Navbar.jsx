import textlogo from "../assets/textlogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import usc from "../assets/usc.png";
import upcebu from "../assets/upcebu.png";
import jiita from "../assets/JIITALOGO.jpg";

const Navbar = () => {

    return(
        <>
            <nav className = "mb-20 flex flex-wrap items-center justify-between py-6" >
                <div className = "flex flex-shrink-0 items-center">
                    <img src = {textlogo} alt = "logo" className = "mx-1 w-40" />
                    <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://usc.edu.ph/"><img  src = {usc} alt = "logo" className = "mx-0 w-20" /> </a>
                    <a href="https://upcebu.edu.ph/"><img  src = {upcebu} alt = "logo" className = "mx-0 w-28" /> </a>
                    <a href="http://jiita.org/vol8no1-8-2/"><img  src = {jiita} alt = "logo" className = "mx-0 w-44" /> </a>
                </div>
                </div>

                <div className = "m-0 flex items-center justify-center gap-4 text-4xl">
                    <a href="https://linkedin.com/in/alden-robell-de-loyola-0b9539288"><FaLinkedin/></a>
                    <a href="https://github.com/aldeniable"><FaGithub/></a>
                    <a href="https://www.hackerrank.com/profile/aldenrmd10"><FaHackerrank/></a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;