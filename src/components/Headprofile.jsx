import { HERO_CONTENT } from "../data/data.js";
import selfLogo1 from "../assets/selfLogo1.jpg";

const Headprofile = () => {

    return (
        <div className = "border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className = "pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl"> Alden Robell</h1>
                        <span className = "bg-gradient-to-r from-green-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent"> 
                            Software Developer
                        </span>
                        <p className = "my-2 max-w-xl py-6 font-light tracking-tighter"> {HERO_CONTENT} </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-10">
                    <div className = "flex justify-center">
                        <img className = "mx-10 w-80 rounded" src = {selfLogo1} alt="Alden Robell"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headprofile; 