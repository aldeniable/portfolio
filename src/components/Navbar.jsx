import textlogo from "../assets/textlogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const Navbar = () => {

    return(
        <>
            <nav className = "mb-20 flex items-center justify-between py-6" >
                <div className = "flex flex-shrink-0 items-center">
                    <img src = {textlogo} alt = "logo" className = "mx-6 w-40 rounded" />
                </div>

                <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://linkedin.com/in/alden-robell-de-loyola-0b9539288"><FaLinkedin/></a>
                    <a href="https://github.com/aldeniable"><FaGithub/></a>
                    <a href="https://www.hackerrank.com/profile/aldenrmd10"><FaHackerrank/></a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;