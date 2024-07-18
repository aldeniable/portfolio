import isiita1 from "../assets/isiita1.jpg";
import { ABOUT_TEXT } from "../data/data.js";

const Subprofile = () => {

    return (
        <div className = " border-b border-neutral-900 pb-4">
            <h1 className = "my-20 text-center text-4xl font-bold"> About Me </h1>
            <div className = "flex flex-wrap">
                <div className = "w-full lg:w-1/2 lg:p-8">
                    <div className = "flex items-center justify-center">
                        <img className = "mx-20 w-80 rounded-2xl" src = {isiita1} alt = "about"></img>
                    </div>
                </div>
                <div className = "w-full lg:w-1/2">
                    <div className = "flex justify-center lg:justify-start">
                        <p className = "my-2 max-w-xl py-6"> {ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subprofile;